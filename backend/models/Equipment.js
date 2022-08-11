const mongoose = require('mongoose');

const EquipmentSchema = new mongoose.Schema({
  businessName: {
    type: String
  },
  description: {
    type: String
  },
  brand: {
    type: String
  },
  model: {
    type: String
  },
  serialNumber: {
    type: String
  },
  voltage: {
    type: String
  },
  location: {
    type: String
  },
  file: {
    type: String
  },
  mainComponentlists: {
    type: Array
  },
  secondaryLists: {
    type: Array
  }
});

module.exports = mongoose.model('equipment', EquipmentSchema);
