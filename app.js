const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const patientsRoutes = require('./routes/patients');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //application/json

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/patients', patientsRoutes);

mongoose
  .connect(
    'mongodb+srv://takudzwamusinga:Takudzwa95!@cluster0.wiqnt9z.mongodb.net/medvault?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
