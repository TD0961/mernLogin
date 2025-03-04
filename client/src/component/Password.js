import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../images/profileImage.png'
import {Link} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {passwordValidate} from '../helper/Validate'
import { faLock } from '@fortawesome/free-solid-svg-icons';


export default function Password() {

  const formik = useFormik({
    initialValues: {
      password: ''
    },
    validate : passwordValidate,
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
            <h1>Hello Again!</h1>
        </div>
          <div className="circular-image-container">
            <img
              src={profileImage}
              alt="User Avatar"
              className="circular-image"
            />
          </div>
          <form onSubmit={formik.handleSubmit}>
          <div className='font-icon'><FontAwesomeIcon icon={faLock} className='icon'/> </div>
          <input
                type="text"
                id="password"
                name="password"
                placeholder='password'
                required
                {...formik.getFieldProps('password')}
              /><br /><br />
  
              <div className='button-container'>
                <button className='button'  type="submit">Next</button>
              </div>
            </form>
            <div className='link-container'>
               <span>Forgot Password? <Link className = "link" to = '/recovery'>Recover Now!</Link></span>
            </div>
        </div>
      </div>
  )
}

