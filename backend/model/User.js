const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Schema

const UserSchema = new mongoose.Schema({
  name : {
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true,
    unique: true
  },
  password:{
    type: String,
    required: true
  }
});

//Populating books the user created
UserSchema.virtual('books', {
  ref:'Book',
  foreignField: 'createdBy',
  localField: '_id'
});

UserSchema.set('toJSON', {virtuals:true})

//encrypting the password of the current user
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//verifying password
UserSchema.methods.isPasswordMatch = async function (enterPassword){
  return await bcrypt.compare(enterPassword, this.password)
}

const User = mongoose.model('User', UserSchema);

module.exports = User;