import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Toaster} from 'react-hot-toast'
import {useFormik} from 'formik'
import {resetPasswordValidation} from '../helper/Validate'
import { faLock } from '@fortawesome/free-solid-svg-icons';


export default function Reset() {

const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: ''
    },
    validate : resetPasswordValidation,
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
            <h1>Reset</h1>
        </div>

          <form onSubmit={formik.handleSubmit}>
          <div className='font-icon'><FontAwesomeIcon icon={faLock} className='icon'/> </div>
              <input
                type="text"
                id="password"
                name="password"
                placeholder='newPassword'
                required
                {...formik.getFieldProps('password')}
              /><br /><br />
              <div className='font-icon'><FontAwesomeIcon icon={faLock} className='icon'/> </div>
              <input
                type="text"
                id="confirmPassword"
                name="confirmPassword"
                placeholder='confirmPassword'
                required
                {...formik.getFieldProps('confirmPassword')}
              /><br /><br />
  
              <div style={{ marginBottom: '70px' }} className='button-container'>
                <button className='button'  type="submit">Login</button>
              </div>
            </form>
        </div>
      </div>
  )
}

