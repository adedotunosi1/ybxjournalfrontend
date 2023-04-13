const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: [true, "Username already taken"],
    },
      password: {
        type: String,
        required: [true, "Please provide a password!"],
        unique: false,
      },
      email: {
        type: String,
        required: [true, "Please provide an Email!"],
        unique: [true, "Email Exist"],
      },
    
});

const MyUsers = mongoose.model('Users', UserSchema);

module.exports = MyUsers;