import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import {Toaster} from 'react-hot-toast'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




export default function Recovery() {

  
    return ( 
      <div className = " background">
        <Toaster reverseOrder={false}></Toaster>
        <div className = " centered-div">

        <div className='button-container'>
            <h1>Recovery!</h1>
        </div>


        <div className='paragraph-container'>
          <p className='paragraph'>Enter 6 Digit OTP Sent To Your Email</p> 
        </div>        
          <form >
              <div className='font-icon'><FontAwesomeIcon icon={faLock} className='icon'/> </div>
              <input
                type="text"
                id="password"
                name="password"
                placeholder='Enter OTP'
                required
              /><br /><br />
  
              <div className='button-container'>
                <button className='button' type="submit">Recover</button>
              </div>
            </form>
            <div className='link-container'>
               <span>Can't get OTP? <button className = "recover-button">Resend</button></span>
            </div>
        </div>
      </div>
  )
}
