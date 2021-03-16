const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"]
})
);
//uri from MongoDB Atlas dashboard
const uri = process.env.ATLAS_URI;
//Connect to the DB using mongoose
mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully")
})

});

app.use("/auth", require("./routers/userRouter"));
app.use("/fuelform", require("./routers/formRouter"));
