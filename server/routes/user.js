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
  const newUser = new User({
    firstName: 'Steve',
    lastName: 'Murdodd',
    phoneNumber: 22234442,
    groupsId: ['5bd77c9d70646d2317f1e844', '5bd77c9c70646d2317f1e843']
  });

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

module.exports = router;
