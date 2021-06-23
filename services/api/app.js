// Module imports
const cors = require('cors');
const errorHandler = require('errorhandler');
const express = require('express');
const formData = require('express-form-data');
const fs = require('fs');
const mongoose = require('mongoose');

// Function to populate DB
const populate = require('./src/routes/api/posts/populate');

// Environment variables
require('dotenv').config();

// Route imports
const routes = require('./src/routes');

// DB_URL
const {DB_URL, NODE_ENV, PORT} = process.env;

// Configure isProduction variable
const isProduction = NODE_ENV === 'production';

// Initiate app
const app = express();
const port = PORT || 8008;

// Configure app
app.use(cors());
app.use(require('morgan')('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(formData.parse());

if (!isProduction) app.use(errorHandler());

// DB connection
mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.set('debug', true);

// Routes
app.use(routes);

app.listen(port, () => {
  console.log(`Server started on PORT: ${port}`, 'Uploading data to DB...');
  populate(null, null, JSON.parse(fs.readFileSync('./lib/posts.json')));
});
