const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// IN ES6 above code be re-written as const {Schema} = mongoose;

const recipientSchema = new Schema({
  email: String,
  responded: { type: Boolean, default: false }
});

module.exports = recipientSchema;
