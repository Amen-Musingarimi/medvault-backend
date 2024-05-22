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

    body('gender')
      .isString()
      .notEmpty(),
    body('dateOfBirth')
      .isDate()
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
    body('yearsOfExperience')
      .isNumeric()
      .notEmpty(),
    body('specialization')
      .isString()
      .notEmpty(),
    body('hospital')
      .isString()
      .notEmpty(),
    body('email')
      .isEmail()
      .notEmpty()
      .custom((value, { req }) => {
        return Doctor.findOne({ email: value }).then((docData) => {
          if (docData) {
            return Promise.reject('Email address already exists!');
          }
        });
      }),
    body('phoneNumber')
      .isString()
      .notEmpty()
      .custom((value, { req }) => {
        return Doctor.findOne({ phoneNumber: value }).then((docData) => {
          if (docData) {
            return Promise.reject('Phone Number already exists!');
          }
        });
      }),
    body('password')
      .trim()
      .isLength({ min: 5 }),
  ],
  authController.signup
);

module.exports = router;
