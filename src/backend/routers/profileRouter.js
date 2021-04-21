const { default: axios } = require("axios");

const router = require("express").Router();
const Profile = require("../models/profileModel");

router.post("/profile_submit", async (req, res) => {
    try {
        const {fullname, address1, address2, city, state, zipcode} = req.body;
        
        console.log(req.body)

        const email = "test@gmail.com";

        const newProfile = new Profile({
            email, fullname, address1, address2, city, state, zipcode
        });
        const savedProfile = await newProfile.save();
    }
    catch(e) {
        console.log(e)
    }
});

module.exports = router;