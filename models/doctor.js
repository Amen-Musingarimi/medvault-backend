const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female', 'Other'],
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  medicalLicenseNumber: {
    type: String,
    required: true,
    unique: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  specialization: {
    type: String,
    required: true,
    enum: [
      'General Practitioner',
      'Physician',
      'Dentist',
      'Pediatrician',
      'Gynecologist',
      'Cardiologist',
      'Dermatologist',
      'Orthopedic Surgeon',
      'Neurologist',
      'Psychiatrist',
      'Ophthalmologist',
      'Otolaryngologist',
      'Urologist',
      'Endocrinologist',
      'Gastroenterologist',
      'Pulmonologist',
    ],
  },
  hospital: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Doctor', doctorSchema);
