const express = require('express');
const dotenv = require('dotenv');
const app = express();
const connectDB = require('./config/db');
const port = process.env.PORT || 8080;
const cors = require('cors');

app.use(express.json());
app.use(cors());
dotenv.config();

// connecting MongoDB
connectDB()

app.listen(port, () => {
    console.log("server connected")
  });


