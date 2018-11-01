const router = require('express').Router();

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

//Get users by id
router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec((err, records) => {
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

//Update user by id
router.put('/:id', (req, res) => {
  User.findById(req.params.id).exec((err, records) => {
    if (err) return console.warn(err);

    records.set({lastName: 'Killcats'});
    records.save((err, updateUser) => {
      if (err) return console.warn(err);

      res.send(updateUser);
    })
  })
})

//Delete user by id
router.get('/delete/:id', (req, res) => {
  User.findByIdAndRemove({_id: req.params.id}, (err, user) => {
    if (err) return console.warn(err);
    
    return res.status(200).send(user.id);
  });
});

module.exports = router;
