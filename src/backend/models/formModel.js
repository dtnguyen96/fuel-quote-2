const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    gallons: {type: Number, required: true},
    date: {type: Date, required: true }

});

const Form = mongoose.model("form", FormSchema);
module.exports = Form;
