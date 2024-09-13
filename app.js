const express = require("express");
const dotenv = require('dotenv');

// CORS options to allow requests from frontend running on port 5500
// const corsOptions = {
//     origin: 'http://localhost:5500', // Allow only requests from this origin
//     methods: 'GET,POST', // Allow only these methods
//     allowedHeaders: ['Content-Type', 'Authorization'] // Allow only these headers
// };
// app.use(cors(corsOptions));

const app = express()
const bodyparser = require("body-parser")
app.use(bodyparser.json())

const cors = require('cors');
const corsOptions = {
  origin: 'http://localhost:5173', 
  methods: 'GET,PUT,PATCH,POST,DELETE', 
  allowedHeaders: 'Content-Type, Authorization', 
  credentials: true, 
};

app.use(cors(corsOptions));

const route = require("./route")
app.use ("/",route)

require("./database")

module.exports = app
