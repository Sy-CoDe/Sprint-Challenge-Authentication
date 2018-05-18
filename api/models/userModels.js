const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const SALT_ROUNDS = 11;

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

UserSchema.pre('save', function(next){
  bcrypt.hash(this.password, SALT_ROUNDS, (err, hash) => {
      if(err) {
          return next(err);
      }
      this.password = hash;
      return next();
  });
});

UserSchema.methods.checkPassword = function(passwordGuess, cb) {
  bcrypt.compare(passwordGuess, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', UserSchema);