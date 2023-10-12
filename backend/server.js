const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();
 

const PORT = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());


const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("MongoDB connection success!");
})
const paymentRouter = require("./routes/Payments.js");
app.use("/payment",paymentRouter);
const courseRouter = require("./routes/Courses.js");
app.use("/course",courseRouter);

app.listen(PORT, () =>{
    console.log(`Server is up and running on port no ${PORT}`)
})