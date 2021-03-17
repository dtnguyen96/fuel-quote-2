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

module.exports = router;