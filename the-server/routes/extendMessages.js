// const crud = require('./crud');
// const Messages = require('../models/Messages');

// const router = crud(Messages);

// router.post('/perfil/:id', (req,res) => {
//   Messages.find({sender_id: req.params.id, receiver_id: req.params.id})
//   .populate('sender_id','receiver_id')
//   .then(messages => {
//     return res.json(messages);
//   })
// })

// router.get('/perfil/:id/delete', (req, res, next) => {
//   Messages.findByIdAndRemove(req.params.id)
//   .then(() => {
//     return res.json(messages);
//   })
//   .catch((err) => {
//     console.log(err);
//     next(err);
//   });
// });
// module.exports = router;