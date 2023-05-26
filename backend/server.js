const express = require('express');

const app = express();

//routes
//User routes 

//Registration 
app.post('/api/users/register' , (req,res) =>{
  res.send('Register route');
});

//login 
app.post('/api/users/login', (req,res) =>{
  res.send('Login route');
});

//update user
app.put('/api/users/update',(req,res) =>{
  res.send('Update route');
});

//Delete user
app.delete('/api/users/:id',(req,res) =>{
  res.send('Delete route');
});

//fetch users
app.get('/api/users',(req,res)=>{
  res.send('Fetch Users');
})

//Server
const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
  console.log(`Server is up and running on ${PORT}`);
})