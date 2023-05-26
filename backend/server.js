const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbConnect =  require('./config/dbConnect');
const User = require('./modules/User');
const usersRoute = require('./routes/userRoute');


//DB connect
dbConnect();

//Passing body data of json type
app.use(express.json());

//Routes
app.use('/api/users',usersRoute);

//Server
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{
  console.log(`Server is up and running on ${PORT}`);
})