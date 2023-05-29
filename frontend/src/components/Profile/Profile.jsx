import React,{useEffect} from 'react';
import './Profile.css';
import { useDispatch, useSelector } from 'react-redux';
import pic from '../../assets/img/bookpic.jpg';
import { getUserProfileAction } from '../../redux/actions/users/usersActions';



const Profile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch (getUserProfileAction());
      
  }, [dispatch]);

  const userProfile = useSelector(state => state.userProfile);
  const{error,loading,user} = userProfile;

  return (
    <>
    {error && <h2>{error}</h2>}
    {loading ? <h3>Loading</h3> :  <div className='container'>
        <div className='row'>
          <div className='col mt-5'>
            <div className='card m-auto ' style={{ width: '50%' }}>
              <img src={pic} className='card-img-top' alt='...' />
              <div className='card-body'>
                <h5 className='card-title'>{user?.email}</h5>
                <p className='card-text'>{user?.name}</p>
              
              </div>
            </div>
          </div>
        </div>
      </div>}
     
      {/* Table */}
      {loading ? <h1>Loading please wait</h1> :
      <table className='table table-hover' >
      <thead>
        <tr  key={user?._id}>
          <th scope='col' >Author</th>
          <th scope='col'>Book Name</th>
          <th scope='col'>Delete</th>
          <th scope='col'>Update</th>
        </tr>
      </thead>
      <tbody>
       {user?.books.map(book=>(
         
         <tr className='table-dark'  key={user?._id}>
           <th scope='row'>{book.author}</th>
           <td>{book.title}</td>
           <td>Delete</td>
           <td>Update</td>
         </tr>
       
       ))}
      </tbody>
    </table>}
    </>
  );
};

export default Profile;