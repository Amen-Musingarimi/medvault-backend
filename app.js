const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const patientsRoutes = require('./routes/patients');
const medicalRecordsRoutes = require('./routes/medicalRecords');
const doctorsAuthRoutes = require('./routes/doctor');

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
app.use('/medicalRecords', medicalRecordsRoutes);
app.use('/auth', doctorsAuthRoutes);

app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message: message });
});

mongoose
  .connect(
    'mongodb+srv://takudzwamusinga:Takudzwa95!@cluster0.wiqnt9z.mongodb.net/medvault?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then((result) => {
    app.listen(8080);
  })
  .catch((err) => console.log(err));
