const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// IN ES6 above code be re-written as const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
