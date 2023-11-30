import React, { useState } from 'react'
import UserService from './UserService';
import { Link } from 'react-router-dom';


function RegisterForm() {
    const [user, setUser] = useState({
        userName: "",
        email: "",
        mobile: "",
        password: "",
    });
    const [msg, setMsg] = useState("")
   
    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value })
    }
console.log(user)
    const RegisterUser = (e) => {
        e.preventDefault();
        
        UserService.saveUser(user)
            .then((res) => {
                console.log("User Added Successfully");
                console.log(user);
                setMsg("User Added Sucessfully");
                setUser({
                    userName: "",
                    email: "",
                    mobile: "",
                    password: "",
                })
              
            }).catch((error) => {
                console.log(error);
            });
    }
    return (
        
        <div className='d-flex justify-content-center align-items-center vh-100' style={{ background: '#3498db' }}>
        <div className='bg-white p-3 rounded w-50 shadow'>
          <h2 className="text-center mb-3">Register User</h2>
          {msg && <p className="text-center text-success font-weight-bold">{msg}</p>}
          <form onSubmit={(e) => RegisterUser(e)}>
            <div className='mb-3'>
              <label htmlFor='userName' className='form-label'>User Name:</label>
              <input type="text" name="userName" className='form-control' onChange={(e) => handleChange(e)} value={user.userName} />
            </div>
            <div className='mb-3'>
              <label htmlFor='email' className='form-label'>Email:</label>
              <input type="email" name="email" className='form-control' onChange={(e) => handleChange(e)} value={user.email} />
            </div>
            <div className='mb-3'>
              <label htmlFor='mobile' className='form-label'>Mobile No:</label>
              <input type="text" name="mobile" className='form-control' onChange={(e) => handleChange(e)} value={user.mobile} />
            </div>
            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password:</label>
              <input type="password" name="password" className='form-control' onChange={(e) => handleChange(e)} value={user.password} />
            </div>
            <div className="d-flex justify-content-between">
  <button type="submit" className='btn btn-primary btn-block'>Submit</button>
  <Link to="/" className='btn btn-primary btn-block' >Back to Login</Link>
</div>


          </form>
        </div>
      </div>
      
      
        
        
    )
}

export default RegisterForm