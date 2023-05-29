import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddBook from './components/Books/AddBook';
import Books from './components/Books/Books';
import Navbar from './components/Navbar/Navbar';
import RegisterUser from './components/users/RegisterUser';
import LoginUser from './components/users/LoginUser';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/login' element={<LoginUser/>} />
          <Route exact path='/profile' element={<Profile/>} />
          
          <Route exact path='/books' element={<Books/>} />
  <Route exact path='/addbook' element={<AddBook/>} />
           <Route exact path='/register' element={<RegisterUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;