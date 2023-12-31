// server/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  joinedDate: { type: Date, default: Date.now },
  description: { type: String, default: '' },
});

module.exports = mongoose.model('User', userSchema);
