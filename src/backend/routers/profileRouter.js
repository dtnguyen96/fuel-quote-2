const router = require("express").Router();

router.post("/profile_info", async (req, res) => {
    try {
        console.log("Attempting to get info from frontend")
        const {fullname, address1, address2, city, state, zipcode} = req.body;

        console.log("This is the user's full name:", fullname)
    }
    catch {
        console.log("Error")
    }
})
module.exports = router;