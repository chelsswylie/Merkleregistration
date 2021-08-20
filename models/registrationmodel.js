const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const registrationSchema = {
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  address1: {
    type: String,
    required: true,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
};

const Registration = mongoose.model("Registration", registrationSchema);

module.exports = Registration;
