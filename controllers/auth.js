const { validationResult } = require('express-validator');
const Doctor = require('../models/doctor');
const bcrypt = require('bcryptjs');

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

  bcrypt
    .hash(password, 12)
    .then((hashedPassword) => {
      const doctor = new Doctor({
        firstName: firstName,
        lastName: lastName,
        emailAddress: emailAddress,
        password: hashedPassword,
        gender: gender,
        phoneNumber: phoneNumber,
        role: 'doctor',
        specialization: specialization,
        medicalLicenseNumber: medicalLicenseNumber,
        hospital: hospital,
      });

      return doctor.save();
    })
    .then((result) => {
      res.status(201).json({ message: 'Doctor created!', doctor: result });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
