const express = require('express');
const { body } = require('express-validator');
const medicalRecordController = require('../controllers/medicalRecords');

const router = express.Router();

// POST /medicalRecords/post;
router.post(
  '/post',
  [
    body('patientId').notEmpty(),
    body('temperature')
      .notEmpty()
      .isString(),
    body('bloodPressure')
      .notEmpty()
      .isString(),
    body('weight')
      .notEmpty()
      .isString(),
    body('reasonForVisit')
      .notEmpty()
      .isString(),
    body('currentSymptoms')
      .notEmpty()
      .isString(),
    body('pastMedicalHistory')
      .optional()
      .isString(),
    body('previousTestResults')
      .optional()
      .isString(),
    body('currentMedications')
      .optional()
      .isString(),
    body('lifestyleAndHabits')
      .optional()
      .isString(),
    body('familyMedicalHistory')
      .optional()
      .isString(),
    body('diagnosis')
      .notEmpty()
      .isString(),
    body('prescription')
      .notEmpty()
      .isString(),
    body('recommendedTests')
      .optional()
      .isString(),
    body('referral')
      .optional()
      .isString(),
    body('checkupDate')
      .optional()
      .isDate(),
  ],
  medicalRecordController.createMedicalRecord
);

// GET /medicalRecords/patientId;
router.get('/:patientId', medicalRecordController.getMedicalRecordsByPatientId);

module.exports = router;
