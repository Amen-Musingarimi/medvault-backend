const express = require('express');
const { body } = require('express-validator');

const patientsController = require('../controllers/patients');

const router = express.Router();

// GET /patients/list;
router.get('/list', patientsController.getPatients);

// POST /patients/post
router.post(
  '/post',
  [
    // Validations for Personal Details
    body('firstName')
      .trim()
      .notEmpty()
      .isLength({ min: 3 }),
    body('lastName')
      .trim()
      .notEmpty()
      .isLength({ min: 3 }),
    body('idNumber')
      .trim()
      .notEmpty()
      .isLength({ min: 12, max: 12 }),
    body('dateOfBirth')
      .trim()
      .notEmpty()
      .isDate(),
    body('gender')
      .trim()
      .notEmpty(),
    body('phoneNumber')
      .trim()
      .notEmpty()
      .isLength({ min: 10 }),
    body('emailAddress')
      .optional()
      .trim(),

    // Validations for Next of Keen Details
    body('keenFirstName')
      .trim()
      .notEmpty()
      .isLength({ min: 3 }),
    body('keenLastName')
      .trim()
      .notEmpty()
      .isLength({ min: 3 }),
    body('keenRelationship')
      .trim()
      .notEmpty()
      .isLength({ min: 4 }),
    body('keenPhoneNumber')
      .trim()
      .notEmpty()
      .isLength({ min: 10 }),

    // Validations for Healthy Details
    body('immunizationStatus')
      .trim()
      .notEmpty()
      .isLength({ min: 3 }),

    // Additional validations for Medical Aid Information (optional)
    body('medicalAidSociety')
      .optional()
      .trim()
      .isLength({ min: 4 }),
    body('policyHolderName')
      .optional()
      .trim()
      .isLength({ min: 4 }),
    body('policyNumber')
      .optional()
      .trim()
      .isLength({ min: 4 }),
    body('memberContactNumber')
      .optional()
      .trim()
      .isLength({ min: 10 }),
  ],
  patientsController.createPatient
);

router.get('/patient/:patientId', patientsController.getPatient);

router.get('/query/:idNumber');

module.exports = router;
