const express = require('express');
const User = require('../modules/User');
const usersRoute = express.Router();
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');


//Registration 
usersRoute.post('/register', asyncHandler(async (req,res)=>{
  const {name, email,password} = req.body;
  const userExists = await User.findOne({email:email});
  if(userExists){
    throw new Error('User Exists'); 
  }
  const userCreated = await User.create({ email,name,password});

   res.json({
      _id: userCreated._id,
      name: userCreated.name,
      password: userCreated.password,
      email: userCreated.email,
      token: generateToken(userCreated._id)
    });
  }) 
);

 //login 
usersRoute.post('/login',asyncHandler(async (req,res)=>{
  /*fetch credentials from request body*/
  const {email, password} = req.body;
   const user = await User.findOne({email});
   if(user && (await user.isPasswordMatch(password))){
    //set status code
    res.status(200);
    res.json({
      _id: user._id,
      name: user.name,
      password: user.password,
      email: user.email,
      token: generateToken(user._id)
    });
  }
  else{
   res.status(401);
   throw new Error('Invalid credentials');
  }
}));

//update user
usersRoute.put('/update',(req,res) =>{
  res.send('Update route');
});

//Delete user
usersRoute.delete('/:id',(req,res) =>{
  res.send('Delete route');
});

//fetch users
usersRoute.get('/',(req,res)=>{
  res.send('Fetch Users');
})




 module.exports =usersRoute;