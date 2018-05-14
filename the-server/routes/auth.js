const express = require("express");
const auth = express.Router();
const passport = require("passport");
const User = require("../models/user");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;
const ensureLogin = require("connect-ensure-login");
const multer = require("multer");
const uploadCloud = require("../config/cloudinary.js");

auth.post("/signup", uploadCloud.single("photo"), (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let name = req.body.name;
  let img = req.body.img;
  // let img = req.file.url;

  if (!username || !password ) {
    res.status(400).json({ message: "Provide all the fields to sign up" });
  }

  User.findOne({ username }, "username", (err, user) => {
    if (user !== null) {
      res.status(400).json({ message: "The username already exists" });
      return;
    }

    let salt = bcrypt.genSaltSync(bcryptSalt);
    let hashPass = bcrypt.hashSync(password, salt);

    let newUser = User({
      username,
      password: hashPass,
      name,
      img: req.body.img
      // img: req.file.url
    });

    newUser.save(err => {
      if (err) {
        res.status(400).json({ message: "Something went wrong" });
      } else {
        req.login(newUser, err => {
          if (err) {
            return res.status(500).json({ message: "Something went wrong" });
          }
          res.status(200).json(req.user);
        });
      }
    });
  });
});

auth.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return res.status(401).json(err);
    }
    if (!user) {
      return res.status(401).json(info);
    }

    req.login(user, err => {
      if (err) {
        return res.status(500).json({ message: "Something went wrong" });
      }
      return res.status(200).json(req.user);
    });
  })(req, res, next);
});

auth.get("/logout", (req, res) => {
  req.logout();
  res.status(200).json({ message: "Success" });
});

auth.get("/loggedin", (req, res) => {
  if (req.isAuthenticated()) {
    return res.status(200).json(req.user);
  }
  return res.status(403).json({ message: "Unauthorized" });
});

auth.get("/perfil/:id", (req, res, next) => {
  User.findById(req.params.id)
  .then(user => {
      user
    res.json(user);
  })
  .catch(err => {
    next(err);
  });
});


// auth.post("/editperfil/:id", uploadCloud.single("photo"), (req, res) => {
//   const { username, name } = req.body;
//   const updates = { username, name };
//   if(req.file){ 
//     const img = req.file.url;
//     updates.img = img;
//   }else {
//     const img = req.user.img; 
//     updates.img = img;   
//   }
//   User.findByIdAndUpdate(req.params.id, updates)
//   .then(() => {
//     res.json(req.user.id)
//   })
//   .catch((err) => {
//     console.log(err);
//     next(err);
//   }); 
// });

module.exports = auth;
