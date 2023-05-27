import {legacy_createStore  as createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { createBookReducer } from '../reducers/books/createBookReducer';

const middleWares = [thunk];
const reducer  = combineReducers({
  bookCreated: createBookReducer,
});

const store = createStore(reducer,composeWithDevTools(applyMiddleware(...middleWares)));

export {store};