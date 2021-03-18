const { default: axios } = require("axios");

const router = require("express").Router();
const Form = require("../models/formModel");
const auth = require("../middleware/auth");

router.post("/submit", auth,  async (req, res) => {
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