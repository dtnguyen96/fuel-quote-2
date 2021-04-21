const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    email : { type: String, required: true, unique: false, trim: true},
    fullname : { type: String, required: true, unique: false, trim: true},
    address1: { type: String, required: true, unique: false, trim: true},
    address2: { type: String, required: false, unique: false, trim: true},
    city: { type: String, required: true, unique: false, trim: true},
    state: { type: String, required: true, unique: false, trim: true},
    zipcode: { type: String, required: true, unique: false, trim: true},
});

const Profile = mongoose.model("profile_submissions", ProfileSchema);
module.exports = Profile;