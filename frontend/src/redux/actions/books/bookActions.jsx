import {CREATE_BOOK_FAIL, CREATE_BOOK_REQUEST, CREATE_BOOK_SUCCESS, FETCH_BOOK_REQUEST,FETCH_BOOK_SUCCESS, FETCH_BOOK_FAIL} from '../actionTypes'
import axios from 'axios';


//create the book
const createBookAction =bookData => {
  return async dispatch  => {
    try{
      dispatch({
        type: CREATE_BOOK_REQUEST,
      });
  
      const config = {
        'Content-Type': 'application/json'
      };
  
      const {data} = await axios.post('/api/books', bookData,config);

      console.log(data)
  
      dispatch({
        type: CREATE_BOOK_SUCCESS,
        payload: data
      });
    }
    catch(error){
      dispatch({
        type: CREATE_BOOK_FAIL,
        payload: error.response && error.response.data.message
      });
    }
  };
};


//Fetch the book

const fetchBooksAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_BOOK_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.get('/api/books', config);
      dispatch({
        type: FETCH_BOOK_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_BOOK_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};


export {createBookAction, fetchBooksAction};