const { validationResult } = require('express-validator');
const MedicalRecord = require('../models/medicalRecord');

// Create a new medical record
exports.createMedicalRecord = (req, res, next) => {
  const errors = validationResult(req);

  // !errors.isEmpty means that we have errors
  if (!errors.isEmpty()) {
    const error = new Error('Validation failed. Entered data is inorrect.');
    error.statusCode = 422;
    throw error;
  }

  const {
    patient,
    temperature,
    bloodPressure,
    weight,
    reasonForVisit,
    currentSymptoms,
    pastMedicalHistory,
    previousTestResults,
    currentMedications,
    lifestyleAndHabits,
    familyMedicalHistory,
    diagnosis,
    prescription,
    recommendedTests,
    referral,
    checkupDate,
  } = req.body;

  const medicalRecord = new MedicalRecord({
    patientId: patient,
    temperature: temperature,
    bloodPressure: bloodPressure,
    weight: weight,
    reasonForVisit: reasonForVisit,
    currentSymptoms: currentSymptoms,
    pastMedicalHistory: pastMedicalHistory,
    previousTestResults: previousTestResults,
    currentMedications: currentMedications,
    lifestyleAndHabits: lifestyleAndHabits,
    familyMedicalHistory: familyMedicalHistory,
    diagnosis: diagnosis,
    prescription: prescription,
    recommendedTests: recommendedTests,
    referral: referral,
    checkupDate: checkupDate,
  });

  medicalRecord
    .save()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: 'Medical Record created successfully',
        medicalRecord: result,
      });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    });
};

// Fetch medical records by patient ID
exports.getMedicalRecordsByPatientId = async (req, res) => {
  try {
    const patientId = req.params.patientId;
    const medicalRecords = await MedicalRecord.find({ patient: patientId });
    res.status(200).json({ data: medicalRecords });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};
