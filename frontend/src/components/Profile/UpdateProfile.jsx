import React from 'react'

const UpdateProfile = () => {
  return (
    <div className="row container-height">
      <div className="col-lg-6 col-md-6 m-auto">
        <div className="container">
          <form >
            <fieldset>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Name</label>
                <input type="text"
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Name' />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                aria-describedby='emailHelp'
                placeholder='Email' />
              </div>

              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                placeholder='Password' />
              </div>

              <button className="btn btn-primary m-auto">Update Your Profile</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  )
}

export default UpdateProfile