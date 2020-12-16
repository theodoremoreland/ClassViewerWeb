// Third party
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

// Custom
const getTeam = require('./routes/getTeam');

const app = express();
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
    console.log("Connection successful");
});

app.use('/', getTeam);

app.listen(3000);