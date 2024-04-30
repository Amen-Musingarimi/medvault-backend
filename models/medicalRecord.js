const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true,
  },
  temperature: String,
  bloodPressure: String,
  weight: String,
  reasonForVisit: String,
  currentSymptoms: String,
  pastMedicalHistory: String,
  previousTestResults: String,
  currentMedications: String,
  lifestyleAndHabits: String,
  familyMedicalHistory: String,
  diagnosis: String,
  prescription: String,
  recommendedTests: String,
  referral: String,
  checkupDate: Date,
});

module.exports = mongoose.model('MedicalRecord', medicalRecordSchema);
