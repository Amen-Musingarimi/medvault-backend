const express = require('express');

const patientsController = require('../controllers/patients');

const router = express.Router();
// GET /patients/list;
router.get('/list', patientsController.getPatients);

//POST /patients/post
router.post('/post', patientsController.createPatient);

module.exports = router;
