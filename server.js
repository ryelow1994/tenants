require('dotenv').config(); // Load environment variables from .env file
const password = process.env.PASSWORD; // Use the password from .env file
const user = process.env.GMAIL_USER; // Use the user from .env file
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

