const express = require('express');
const cors          = require("cors");
const bodyParser    = require('body-parser');
const db = require('./config/database');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const {mongoose} = db

app.get('/', (_, response) => {
    response.json({
        message: 'Welcome to Rental Backend App'
    })
});

app.use('/api', require('./api')());

mongoose.connection.once("open", function() {
    console.log("MongoDB database connection established successfully");
  });

app.listen(4000, () => {
    console.log('server is running at 4000')
});