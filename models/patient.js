const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = require('./user');

const patientSchema = new Schema(
  {
    idNumber: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    residentialAddress: {
      type: String,
      required: true,
    },
    keenFirstName: {
      type: String,
      required: true,
    },
    keenLastName: {
      type: String,
      required: true,
    },
    keenRelationship: {
      type: String,
      required: true,
    },
    keenPhoneNumber: {
      type: String,
      required: true,
    },
    medicalConditions: String,
    allergies: String,
    disability: String,
    familyMedicalHistory: String,
    surgicalHistory: String,
    immunizationStatus: {
      type: String,
      required: true,
    },
    medicalAidSociety: String,
    policyHolderName: String,
    policyNumber: String,
    memberContactNumber: String,
    addedBy: {
      type: Object,
      required: String,
    },
  },
  { timestamps: true }
);

const Patient = User.discriminator('patient', patientSchema);

module.exports = Patient;
