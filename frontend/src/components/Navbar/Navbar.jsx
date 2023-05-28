import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserAction } from '../../redux/actions/users/usersActions';

const Navbar = props => {
  const state = useSelector(state => state.userLogin);

  const history = useNavigate();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutUserAction());
    history.push('/');
  };

  const { userInfo, loading, error } = state;
  return (
    <header>
         <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          Library
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
            {!userInfo ? (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/login'>
                    Login
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/books'>
                    Books
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addbook'>
                    Add book
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    Users
                  </Link>
                </li>
              
               <li className='nav-item'>
                  <Link
                    onClick={logoutHandler}
                    className='nav-link'
                    to='/login'>
                    Logout
                  </Link>
                </li>

                <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle btn-dark" data-toggle="dropdown" href="/" role="button" aria-haspopup="true" aria-expanded="false"></a>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/profile">Profile</Link>
            <Link className="dropdown-item" to="/addbook">Add book</Link>
            <Link className="dropdown-item" to="/books">Books</Link>
            <div className="dropdown-divider"></div>
          </div>
        </li>

        <form className="d-flex">
        <input className="form-control me-sm-2" type="search" placeholder="Search"/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
                
              </>
              
            )}
          </ul>
          

      
        </div>
      </nav>
    </header>
  );
};

export default Navbar;