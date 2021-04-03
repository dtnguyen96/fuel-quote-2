const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    email: {type: String, required: true, unique: true, trim: true},
    full_name: {type: String, required: true, unique: false, trim: true},
    address_1: {type: String, required: true, unique: false, trim: true},
    address_2: {type: String, required: true, unique: false, trim: true},
    city: {type: String, required: true, unique: false, trim: true},
    state: {type: String, required: true, unique: false, trim: true},
    zip_code: {type: String, required: true, unique: false, trim: true}
});

const Form = mongoose.model("profiles", FormSchema);
module.exports = Form;