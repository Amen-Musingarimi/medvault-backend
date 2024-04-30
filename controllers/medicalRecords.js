const MedicalRecord = require('../models/medicalRecord');

// Create a new medical record
exports.createMedicalRecord = async (req, res) => {
  try {
    const medicalRecord = new MedicalRecord(req.body);
    await medicalRecord.save();
    res
      .status(201)
      .json({
        message: 'Medical record created successfully',
        data: medicalRecord,
      });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
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
