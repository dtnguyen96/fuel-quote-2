const mongoose = require("mongoose")

const FuelFormSchema = new mongoose.Schema({
    gallons: {type: Number, required: true, unique: false, trim: true},
    addr: {type: String, required: true, unique: false, trim: true},
    date: {type: String, required: true, unique: false, trim: true},
    suggested_price: {type: String, required: true, unique: false, trim: true},
    total_amount: {type: String, required: true, unique: false, trim: true}
})

const fuelForm = mongoose.model("fuelforms", FuelFormSchema);
module.exports = fuelForm;