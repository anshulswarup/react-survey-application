const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// IN ES6 above code be re-written as const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String,
  credits: {
    type: Number,
    default: 0
  }
});

mongoose.model('users', userSchema);
