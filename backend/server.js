const express = require('express');
const app = express();

const usersRoute = require('./routes/userRoute');
const error = require('./middlewares/errorMiddlewareHandler');
const dotenv = require('dotenv');
const bookRouter = require('./routes/bookRoutes');




dotenv.config();
require('./config/dbConnect')();

//Passing body data of json type
app.use(express.json());

/*Routes*/

//Users
app.use('/api/users',usersRoute);

//Books
app.use('/api/books',bookRouter);

//Error middleware 
app.use(error.errorMiddlewareHandler);

//Server
const PORT = process.env.PORT || 7000
app.listen(PORT, ()=>{
  console.log(`Server is up and running on ${PORT}`);
})