const router = require('express').Router();

const Group = require('../models/group');


//CRUD

//Get all groups
router.get('/', (req, res) => {
  Group.find({}).exec((err, records) => {
    if (err) return console.warn(err);

    console.log(records);
    res.send(records);
  })

});

//Get groups by id
router.get('/:id', (req, res) => {
  Group.findById(req.params.id).exec((err, records) => {
    if (err) return console.warn(err);

    res.send(records)
  });
});

//Add new group
router.post('/', (req, res) => {
  const newGroup = new Group(req.body);

  newGroup.save(err => {
    if (err) return console.warn(err);

    res.send(newGroup);
  })
});

//Update group
router.put('/:id', (req, res) => {
  Group.findById(req.params.id).exec((err, records) => {
    if (err) return console.warn(err);

    records.set({usersId: ['5bd772e761de190f715c12b6']});
    records.save((err, updateGroup) => {
      if (err) return console.warn(err);

      res.send(updateGroup);
    })
  })
})

//Delete group by id
router.get('/delete/:id', (req, res) => {
  Group.findByIdAndRemove({ _id: req.params.id }, (err, group) => {
    if (err) return console.warn(err);

    return res.status(200).send(group.id);
  });
});

module.exports = router;
