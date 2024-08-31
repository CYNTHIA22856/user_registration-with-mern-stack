const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://cynthia:2002@cluster0.vqjbq.mongodb.net/user_registration')
app.use('/api', require('./route/registrationRoute'));
app.listen(5174, function () {
  console.log(`Server is running on port 5174`);
}); 
