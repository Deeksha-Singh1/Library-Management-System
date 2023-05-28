const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const authMiddleware = require('../middlewares/authMiddleware');
const Book = require('../model/Book');

const bookRouter = express.Router();

//create book
bookRouter.post('/', expressAsyncHandler( async (req,res)=>{
  const book = await Book.create(req.body);
  if(book){

    res.status(200);
    res.json(book);
  }
  else{
    res.status(500);
    throw new Error('Book creating failed');
  }
})
);

//Find the book
bookRouter.get('/', expressAsyncHandler( async (req,res)=>{
  const book = await Book.find({});
  if(book){

    res.status(200);
    res.json(book);
  }
  else{
    res.status(500);
    throw new Error('There are no books');
  }
})
);

//Update the book
bookRouter.put('/:id',authMiddleware,expressAsyncHandler( async ( req, res)=>{
  const book = await Book.findById(req.params.id);

  if(book){
    const UpdateBook = await Book.findByIdAndUpdate(req.params.id, req.body,{
      //returns current data when updated back to the user
      new:true,
      runValidators:true
    });
    res.status(200);
  res.json(UpdateBook);
  }
  else{
    res.status(500);
    throw new Error("Book updating failed")
  }
  
}));

//delete a  book

bookRouter.delete('/:id', expressAsyncHandler(async(req,res)=>{
  try{
    const book = await Book.findByIdAndDelete(req.params.id);
    res.status(200);
    res.send(book)
  }
  catch(error){
    res.json(error)
  }
}))

module.exports = bookRouter;