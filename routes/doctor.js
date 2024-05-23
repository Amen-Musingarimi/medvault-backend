const express = require('express');
const { body } = require('express-validator');

const Doctor = require('../models/doctor');
const authController = require('../controllers/auth');

const router = express.Router();

router.put(
  '/signup',
  [
    body('firstName')
      .isString()
      .notEmpty(),
    body('lastName')
      .isString()
      .notEmpty(),
    body('emailAddress')
      .isEmail()
      .notEmpty(),
    body('password')
      .trim()
      .isLength({ min: 5 }),
    body('gender')
      .isString()
      .notEmpty(),
    body('phoneNumber')
      .isString()
      .notEmpty(),
    body('specialization')
      .isString()
      .notEmpty(),
    body('medicalLicenseNumber')
      .isString()
      .custom((value, { req }) => {
        return Doctor.findOne({ medicalLicenseNumber: value }).then(
          (docData) => {
            if (docData) {
              return Promise.reject('Medical Licence Number already exists!');
            }
          }
        );
      }),
    body('hospital')
      .isString()
      .notEmpty(),
  ],
  authController.signup
);

module.exports = router;
