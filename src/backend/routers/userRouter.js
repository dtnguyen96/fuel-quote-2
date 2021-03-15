const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");

router.post("/", async (req, res) => {
    try {
        const { email, password, passwordVerify } = req.body;
        //validation 

        if (!email || !password || !passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        if (password.length < 6)
            return res
                .status(400)
                .json({ errorMessage: "Please enter a password of at least 6 characters." });
        if (password !== passwordVerify)
            return res
                .status(400)
                .json({ errorMessage: "Please enter the same password twice." });

        const existingUser = await User.findOne({ email });
        if (existingUser)
            return res
                .status(400)
                .json({ errorMessage: "An account exists with this email." });
        
        //hash the password 
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        //save a new user account to the db
        const newUser = new User({
            email, passwordHash
        });
        const savedUser = await newUser.save();

    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

module.exports = router;
