import React, { useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import profileImage from '../images/profileImage.png'
import {Link} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {registerValidation} from '../helper/Validate'
import convertToBase64 from '../helper/convert'; 



//import { Container, Row, Col, Form, Button } from 'react-bootstrap';

export default function Register() {

  const [file, setFile] = useState();

  const formik = useFormik({
      initialValues: {
        usernmae: '',
        email: '',
        password: ''
      },
      validate : registerValidation,
      validateOnBlur: false,
      validateOnChange: false,
      onSubmit: async values => {
        values = await Object.assign(values, { profile: file || '' });
        console.log(values);
      }
    });

    /** formik doesn't support file upload so we need to create this handler */
  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className = " background">
      <Toaster reverseOrder={false}></Toaster>
      <div className = " centered-div">

      <div className='button-container'>
          <h1>Register Here!</h1>
      </div>

        <form onSubmit={formik.handleSubmit}>
            <div className="circular-image-container">
            <label htmlFor="profile">
              <img
                  src={file || profileImage}
                  alt="User Avatar"
                  className="circular-image"
                />            
            </label>
            <input onChange={onUpload} type="file" id="profile" name="profile" />
            </div>
            <br />
            
            <div className='font-icon'> <FontAwesomeIcon icon={faUser} className='icon'/> </div>
            <input
              type="text"
              id="name"
              name="name"
              placeholder='Name'
              {...formik.getFieldProps('usernmae')}
              required
            /><br /><br />

            <div className='font-icon'><FontAwesomeIcon icon={faEnvelope} className='icon' /> </div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder='Email'
              {...formik.getFieldProps('email')}

              required
            /><br /><br />
            <div className='font-icon'><FontAwesomeIcon icon={faLock} className='icon'/> </div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder='Password'
              {...formik.getFieldProps('password')}

              required
            /><br /><br />
            <div className='button-container'>
              <button className='button'  type="submit">Register</button>
            </div>
          </form>
          <div className='link-container'>
             <span> Already Registered? <Link className = "link" to = '/'>Login Now</Link></span>
          </div>
      </div>
    </div>
  );
}
