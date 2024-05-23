const User = require('./user');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const doctorSchema = new Schema(
  {
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
    medicalLicenseNumber: {
      type: String,
      required: true,
      unique: true,
    },
    hospital: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Doctor = User.discriminator('doctor', doctorSchema);

module.exports = Doctor;
