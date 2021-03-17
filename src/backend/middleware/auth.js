const auth = (req, res, next) => {
    try {
        const token = req.cookies.token;
        
    } catch (err){
        console.log(err);
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;