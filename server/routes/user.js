const router = require('express').Router();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);

const User = require('../models/user');

//CRUD

//Get all users
router.get('/', (req, res) => {
  User.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    console.log(records);
    res.send(records);
  })

});

//Get user by id
router.get('/:id', (req, res) => {
  User.findById({_id: req.params.id}).exec((err, records) => {
    if (err) return console.warn(err);

    res.send(records)
  });
});

//Create new user
router.post('/', (req, res) => {
  const newUser = new User(req.body);
  newUser.save(err => {
    if (err) return console.warn(err);

    res.send(newUser);
  })
});

//Add user to group 
router.put('/', (req, res) => {
  User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(req.body.userId.value), 
    {$push: { groupId: req.body.groupId }},
    {new: true },
    (err, records) => {
      if (err) return console.warn(err);

      return res.status(200).send(records);
    });
});

//remove user from group 
router.put('/remove', (req, res) => {
  User.findByIdAndUpdate(
    new mongoose.Types.ObjectId(req.body.userId), 
    { $pull: { groupId: req.body.groupId } },
    (err, records) => {
      if (err) return console.warn(err);

      return res.status(200).send(records);
    });
});

//

//Delete user by id
router.get('/delete/:id', (req, res) => {
  User.findByIdAndRemove({_id: req.params.id }, (err, user) => {
    if (err) return console.warn(err);
    
    return res.status(200).send(user.id);
  });
});

//remove group from users
router.put('/remove-group/:id', (req, res) => {
  User.update(
    {},
    { $pull: { groupId: req.params.id } },
    {multi: true},
    (err, records) => {
      if (err) return console.warn(err);

      return res.status(200).send(records);
    });
});


//Get users by id group
router.get('/get-by-id/:id', (req, res) => {
  console.log(req.params.id);
User.find({ groupId: req.params.id}, (err, users) => {
    if (err) return console.warn(err);

    return res.status(200).send(users);
  });
});


module.exports = router;
