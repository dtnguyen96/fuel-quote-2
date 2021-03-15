const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, trim: true},
    passwordHash: {type: String, required: true},

});

const User = mongoose.model("user", UserSchema);

module.exports = User;