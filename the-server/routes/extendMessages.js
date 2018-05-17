// const crud = require('./crud');
const Messages = require('../models/Messages');
// const router = crud(Messages);
const User = require("../models/User");
const express = require("express");
const router = express.Router();

router.get('/perfil/:id', (req,res) => {
  Messages.find({userReceiver_id: req.params.id})
  .populate('userSender_id')
  .then(messages => {
    return res.json(messages);
  })
})

router.post("/", (req, res) => {
    let text = req.body.text;
    let userSender_id = req.body.userSender_id;
    let userReceiver_id = req.body.userReceiver_id;
    
    let newMessages = {
        text,
        userSender_id,
        userReceiver_id
      };
    Messages.create(newMessages).then(messages => res.json(messages))
  });

router.delete('/delete/:id', (req, res, next) => {
  Messages.findByIdAndRemove(req.params.id)
  .then(() => {
    return res.json({ message: 'Message removed successfully' });
  })
  .catch((err) => {
    console.log(err);
    next(err);
  });
});
module.exports = router;