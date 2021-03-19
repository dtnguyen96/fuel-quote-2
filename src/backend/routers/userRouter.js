const router = require("express").Router();
const User = require("../models/userModel")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

//register
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
        /*
        //save a new user account to MongoDB
        const newUser = new User({
            email, passwordHash
        });
        const savedUser = await newUser.save();
*/
        //sign the token
        const token = jwt.sign({
            user: savedUser._id,
        }, process.env.JWT_SECRET);

        //send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();

    } catch (err) {
        console.log(err);
        res.status(500).send();
    }
});

//log in 

router.post("/login", async (req, res) => {
    try {
        //validation
        const { email, password } = req.body;
        if (!email || !password)
            return res
                .status(400)
                .json({ errorMessage: "Please enter all required fields." });
        // check if email is correct
        const existingUser = await User.findOne({ email });
        if (!existingUser)
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or password." });
        //check if password is correct
        const passwordCorrect = await bcrypt.compare(
            password,
            existingUser.passwordHash);
        if (!passwordCorrect)
            return res
                .status(401)
                .json({ errorMessage: "Wrong email or password." });
        //sign the token
        const token = jwt.sign({
            user: existingUser._id,
        }, process.env.JWT_SECRET);
        //send the token in a HTTP-only cookie
        res.cookie("token", token, {
            httpOnly: true
        }).send();

    } catch (err) {
        console.error(err);
        res.status(500).send();
    }
});

//logout
router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0),
    }).send();

})

//loggedIn

router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.token;
        if (!token) return res.json(false);

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);

    } catch (err) {
        console.log(err);
        res.json(false);
    }
});
module.exports = router;
