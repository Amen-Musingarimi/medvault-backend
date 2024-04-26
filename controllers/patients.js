const { validationResult } = require('express-validator');
const Patient = require('../models/patient');

exports.getPatients = (req, res, next) => {
  Patient.find()
    .then((patients) => {
      res
        .status(200)
        .json({ message: 'Patients fetched successfully', patients: patients });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Controller function to handle the creation of a patient
exports.createPatient = (req, res, next) => {
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
    idNumber,
    dateOfBirth,
    gender,
    phoneNumber,
    emailAddress,
    residentialAddress,
    keenFirstName,
    keenLastName,
    keenRelationship,
    keenPhoneNumber,
    medicalConditions,
    allergies,
    disability,
    familyMedicalHistory,
    surgicalHistory,
    immunizationStatus,
    medicalAidSociety,
    policyHolderName,
    policyNumber,
    memberContactNumber,
  } = req.body;

  const patient = new Patient({
    firstName: firstName,
    lastName: lastName,
    idNumber: idNumber,
    dateOfBirth: dateOfBirth,
    gender: gender,
    phoneNumber: phoneNumber,
    emailAddress: emailAddress,
    residentialAddress: residentialAddress,
    keenFirstName: keenFirstName,
    keenLastName: keenLastName,
    keenRelationship: keenRelationship,
    keenPhoneNumber: keenPhoneNumber,
    medicalConditions: medicalConditions,
    allergies: allergies,
    disability: disability,
    familyMedicalHistory: familyMedicalHistory,
    surgicalHistory: surgicalHistory,
    immunizationStatus: immunizationStatus,
    medicalAidSociety: medicalAidSociety,
    policyHolderName: policyHolderName,
    policyNumber: policyNumber,
    memberContactNumber: memberContactNumber,
    addedBy: { name: 'Amen Musingarimi' },
  });

  patient
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Patient created successfully!',
        patient: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.getPatient = (req, res, next) => {
  const patientId = req.params.patientId;

  Patient.findById(patientId)
    .then((patient) => {
      if (!patient) {
        const error = new Error('Could not find patient.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Patient fetched.', patient: patient });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

exports.searchPatient = (req, res, next) => {
  const patientNationalId = req.params.idNumber;

  Patient.findOne({ idNumber: patientNationalId })
    .then((patient) => {
      if (!patient) {
        const error = new Error('Could not find patient.');
        error.statusCode = 404;
        throw error;
      }
      res.status(200).json({ message: 'Patient Found.', patient: patient });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};
