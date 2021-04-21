const { default: axios } = require("axios");

const router = require("express").Router();
const Form = require("../models/formModel")
const fuelForm = require("../models/fuelFormModel");
const Profile = require("../models/profileModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const { render } = require("../server");

router.post("/email_submit", async (req, res) => {
    try{
        const email_input = req.body.email

        const existingUser = await Profile.findOne({email : email_input});

        if (existingUser) {console.log("User email exists")}
        else {console.log("User email does not exist")}

        const profile_info = {
            d_addr: existingUser.address1,
            suggested_price: "$999.99",
            total_amount: "$999.99"
        }
        res.send(profile_info)
    }
    catch(err) {}
})


router.post("/submit", async (req, res) => {
    try {
        const email = req.body.email
        const gallons = req.body.gallons
        const date = req.body.date
        const addr = req.body.addr
        const suggested_price = req.body.suggested_price
        const total_amount = req.body.total_amount

        const formInput = new fuelForm({
            email,
            gallons,
            addr,
            date,
            suggested_price,
            total_amount
        })
        const formInputSaved = await formInput.save();
    }
    catch(err) {console.log(err.message)}
})

router.get("/history", async (req, res) => {
    try{
        formHistory = await fuelForm.find()

        if (formHistory.length)
        {
            res.send(formHistory)
        }
        else {
            console.log("The queries for the history doesn't exist");
        }
    }
    catch(err) {console.log(err.message)}
})
 function calcPricePerGallon(numGallons, location, history){
    let locationFactor = 0;
    let historyFactor = 0;
    let gallonFactor = 0;
    const profitFactor = 0.1;
    let margin = 0;
    if (location === "IL"){
        locationFactor = 0.02
    }
    else {
        locationFactor = 0.04
    }
    if (history){
        historyFactor = 0.01
    }
    if (numGallons > 1000){
        gallonFactor = 0.02
    }
    else {
        gallonFactor = 0.03
    }
    margin = ( locationFactor - historyFactor + gallonFactor + profitFactor) * 1.50
    return 1.5 + margin
}
router.post("/price", async (req, res) => {
    try {
        const gallon = req.body.gallons
        const email = req.body.email
        const existingUser = await Profile.findOne({email : email});
        const historyData = await fuelForm.findOne({email: email});
        let locationIn = existingUser.state
        let pricePerGallon = calcPricePerGallon(gallon, locationIn, historyData);
        let totalDue = pricePerGallon * gallon;
        const priceDataRes = {perGallon: pricePerGallon, total: totalDue}
        //res.send(priceDataRes)
    }
    catch(err) {console.log(err.message)}
})

module.exports = router;