const MessagesGlobal = require('../models/MessagesGlobal');
// const router = crud(Messages);
const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.get('/chatglobal', (req,res) => {
    MessagesGlobal.find()
    .populate('userSender_id')
    .then(messages => {
      return res.json(messages);
    })
  })

router.post("/global", (req, res) => {
    let text = req.body.text;
    let userSender_id = req.body.userSender_id;
    
    let newMessages = {
        text,
        userSender_id,
      };
    MessagesGlobal.create(newMessages).then(messages => res.json(messages))
  });
router.delete('chatglobal/delete', (req, res, next) => {
    MessagesGlobal.remove({})
    .then(() => {
      return res.json({ message: 'Message removed successfully' });
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
  });

  module.exports = router;