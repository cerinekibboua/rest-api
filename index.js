const express = require('express')
const app = express();
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1:27017/restapi';
// app.get('/api,(req,res') => res.send('Its working')
mongoose.connect('mongodb://localhost/restapi')