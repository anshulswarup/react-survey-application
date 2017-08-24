const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// IN ES6 above code be re-written as const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');
const surveySchema = new Schema({
  title: String,
  body: String,
  subject: String,
  recipients: [RecipientSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 },
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
  lastResponded: Date
});

mongoose.model('surveys', surveySchema);
