const express = require('express');
const router = express.Router();
const medicalRecordController = require('../controllers/medicalRecords');

// GET /medicalRecords/post;
router.post('/post', medicalRecordController.createMedicalRecord);

// GET /medicalRecords/patientId;
router.get('/:patientId', medicalRecordController.getMedicalRecordsByPatientId);

module.exports = router;
