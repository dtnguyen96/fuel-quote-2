const { default: axios } = require("axios");

const router = require("express").Router();
const Form = require("../models/formModel")
const fuelForm = require("../models/fuelFormModel");
const Profile = require("../models/profileModel");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const auth = require("../middleware/auth");
const { render } = require("../server");

router.get("/profile_info", async (req, res) => {
    try {
        const existingUser = await Profile.findOne({email : "test@gmail.com"});

        if (existingUser) {console.log("User email exists")}
        else {console.log("User email does not exist")}

        const profile_info = {
            d_addr: existingUser.address1,
            suggested_price: "$999.99",
            total_amount: "$999.99"
        }
        res.send(profile_info)
    }
    catch(err) {console.log(err.message)}
})

router.post("/submit", async (req, res) => {
    try {        
        const gallons = req.body.gallons
        const date = req.body.date
        const addr = req.body.addr
        const suggested_price = req.body.suggested_price
        const total_amount = req.body.total_amount

        const formInput = new fuelForm({
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

router.post("/price", async (req, res) => {
    try {
        const gallon = req.body.gallons
        
        function calcPricePerGallon(numGallons, location, history){
            let locationFactor = 0;
            let historyFactor = 0;
            let gallonFactor = 0;
            const profitFactor = 0.1;
            let margin = 0;
            if (location === "TX"){
                locationFactor = 0.02
            }
            else {
                locationFactor = 0.04
            }
            if (history){
                historyFactor = 0.01
            }
            if (gallon > 1000){
                gallonFactor = 0.02
            }
            else {
                gallonFactor = 0.03
            }
            margin = ( locationFactor - historyFactor + gallonFactor + profitFactor) * 1.50
            console.log(margin)
            return 1.5 + margin
        }
        function calcTotal (customerIn) {
            return calcPricePerGallon(customerIn) * customerIn.gallon
        }
        */
    }
    catch(err) {console.log(err.message)}
})

module.exports = router;