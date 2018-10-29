const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRouter = require('./server/routes/user');
const groupRouter = require('./server/routes/group');

const port = process.env.PORT || 3000;
const app = express();


// Middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/user', userRouter);
app.use('/api/group', groupRouter);


app.listen(port, (err) => {
  if(err) return console.warn(err)
  console.log('Server is running');
});

mongoose.connect('mongodb://localhost:27017/usermanagment1', { useNewUrlParser: true },  err => {
  if (err) return console.warn(err);
  console.log('Database connected');
})
