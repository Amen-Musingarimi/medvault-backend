const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    idNumber: {
      type: String,
      required: true,
      unique: true,
      minlength: 12,
      maxlength: 12,
    },
    dateOfBirth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: ['male', 'female', 'other'],
    },
    phoneNumber: {
      type: String,
      required: true,
      minlength: 10,
    },
    emailAddress: String,
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
      minlength: 10,
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

module.exports = mongoose.model('Patient', patientSchema);
