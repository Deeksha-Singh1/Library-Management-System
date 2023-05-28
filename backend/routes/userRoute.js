const express = require('express');
const User = require('../model/User');
const usersRoute = express.Router();
const asyncHandler = require('express-async-handler');
const generateToken = require('../utils/generateToken');
const authMiddleware = require('../middlewares/authMiddleware');



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
usersRoute.put('/update',authMiddleware,
asyncHandler(async (req, res) => {
  //Find the login user by ID
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    if (req.body.password) {
      user.password = req.body.password || user.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      token: generateToken(updatedUser._id),
    });
  }
})
);

//Delete user
usersRoute.delete('/:id', (req, res) => {
  res.send('Delete route');
});

//fetch Users
usersRoute.get(
  '/',
  authMiddleware,
  asyncHandler(async (req, res) => {
    const users = await User.find({});

    if (users) {
      res.status(200).json(users);
    } else {
      res.status(500);

      throw new Error('No users found at the moment');
    }
  })
);

//Profile route
usersRoute.get('/profile/update',authMiddleware,asyncHandler(async (req,res)=>{
  try{
    const user = await User.findById(req.user._id).populate('books');
    if(!user) throw new Error("You don't have a any profile")
    res.status(200)
    res.send(user)
  }catch(error){
      res.status(500);
      throw new Error('Server')
  }
}))


 module.exports =usersRoute;