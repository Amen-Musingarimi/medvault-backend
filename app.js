const express = require('express');
const bodyParser = require('body-parser');

const patientsRoutes = require('./routes/patients');

const app = express();

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); //application/json

app.use('/patients', patientsRoutes);

app.listen(8080);
