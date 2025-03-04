import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../images/profileImage.png'
import {Link} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {usernameValidate} from '../helper/Validate'

export default function Username() {

  const formik = useFormik({
    initialValues: {
      username: ''
    },
    validate : usernameValidate,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async values => {
      console.log(values);
    }
  });

    return (
      <div className = " background">
        <Toaster reverseOrder={false}></Toaster>
        <div className = " centered-div">

        <div className='button-container'>
            <h1>Greeting Buddy!</h1>
        </div>
          <div className="circular-image-container">
            <img
              src={profileImage}
              alt="User Avatar"
              className="circular-image"
            />
          </div>
          <form onSubmit={formik.handleSubmit}>
          <div className='font-icon'> <FontAwesomeIcon icon={faUser} className='icon'/> </div>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='UserName'
                required
                {...formik.getFieldProps('username')}
              /><br /><br />
  
              <div className='button-container'>
                <button type="submit">Let's go</button>
              </div>
            </form>
            <div className='link-container'>
               <span> Not Registered? <Link className = "link" to = '/register'>Register here</Link></span>
            </div>
        </div>
      </div>
  )
}
