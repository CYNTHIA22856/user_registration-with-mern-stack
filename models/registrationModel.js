
const mongoose = require('mongoose');

const registrationSchema = {
  name:String,
  sex: String,
  region:  String,
  nationality:  String,
  dob: Date,
  address:  String,
  email:  String,
  school: String,
  qualification: String,
  membership:  String,
  which:  String,
  profilePicture:Buffer, 
  }



const registration = mongoose.model('registration', registrationSchema);

module.exports = registration;
