const { default: axios } = require("axios");

const router = require("express").Router();
const Form = require("../models/formModel");
const auth = require("../middleware/auth");
const { render } = require("../server");

router.get("/profile_info", async (req, res) => {
    try {
        const profile_info = {
            d_addr: "123 Example Dr",
            suggested_price: "$999.99",
            total_amount: "$999.99"
        }
        res.send(profile_info)
    }
    catch(err) {console.log(err.message)}
})

router.post("/submit", async (req, res) => {
    try {
        console.log("Received gallon count:", req.body.gallons)
        console.log("Received delivery date:", req.body.date)
    }
    catch(err) {console.log(err.message)}
})

router.get("/history", (req, res) => {
    try{
        const history = {
        gallons: "Dummy data",
        delivery_add: "Dummy data",
        delivery_date: "Dummy data",
        suggested_price: "Dummy data",
        amount_due: "Dummy data"
    }
        res.send(history)
    }
    catch(err) {console.log(err.message)}
})

module.exports = router;