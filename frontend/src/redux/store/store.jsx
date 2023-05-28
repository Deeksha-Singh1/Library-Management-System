import {legacy_createStore  as createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';
import { bookListReducer } from '../reducers/books/bookListReducer';
import { userReducer } from '../reducers/users/userAuthReducer';

const middleWares = [thunk];

const reducer  = combineReducers({
  bookCreated: createBookReducer,
  bookList: bookListReducer,
  userLogin: userReducer, //login/register
});


//Get user from localstorage and save it into our store

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleWares)));

export {store};