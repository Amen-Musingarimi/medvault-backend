const { validationResult } = require('express-validator');
const Patient = require('../models/patient');

exports.getPatients = (req, res, next) => {
  res
    .status(200)
    .json({ patients: [{ name: 'Mufaro', id_number: '45-209926Y22' }] });
};

// Controller function to handle the creation of a patient
exports.createPatient = (req, res, next) => {
  const errors = validationResult(req);

  // !errors.isEmpty means that we have errors
  if (!errors.isEmpty()) {
    return res.status(422).json({
      message: 'Validation failed. Entered data is inorrect.',
      errors: errors.array(),
    });
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

  console.log(idNumber, lastName, firstName);

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
      console.log(err);
    });
};
