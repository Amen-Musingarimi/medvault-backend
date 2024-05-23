const { validationResult } = require('express-validator');
const Doctor = require('../models/doctor');

exports.signup = (req, res, next) => {
  const errors = validationResult(req);

  // !errors.isEmpty means that we have errors
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed. Entered data is inorrect.');
    error.statusCode = 422;
    throw error;
  }

  const {
    firstName,
    lastName,
    emailAddress,
    password,
    gender,
    phoneNumber,
    specialization,
    medicalLicenseNumber,
    hospital,
  } = req.body;
};
