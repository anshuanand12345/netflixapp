import React from 'react';
import './App.css';


const SignIn = () => {
  return (
    <>
    <div className='signin'>
      <div className='header'>
        <div className='logo'>
          <img src='./image/netflixlogo.webp' alt='' />
        </div>
      </div>

      <div className='box'>
        <div className='boxheader'>
          <h2> SignIn </h2>
        </div>

        <div className='input'>
          <input type='email' placeholder='Email or Phone number' />
          <input type='password' placeholder='Password' />
        </div>

        <div className='bigbutton'>
          <button> Sign In </button>
          <div className='lower'>
            <div className='check'>
              <input type="checkbox" />
              <label> Remember me</label>
            </div>

            <div className='need'>
              <h6> Need help ?</h6>
            </div>
          </div>
        </div>


        <div className='base'>
          <div className='sign'>
            <h5> New to Netflix? </h5>
          </div>
          <div>
            <h5> Sign up now</h5>
          </div>
        </div>
      </div>
       
          <div className='foot'>
            <h2> Questions? Call 000-800-919-1694 </h2>
            <div className='vertical'>
              <div className='one'>
                <h4> FAQ </h4>
                <h4> Investor Relations </h4>
                <h4> Privacy </h4>
                <h4> Speed Test </h4>
              </div>
              <div className='one'>
                <h4> Help Centre</h4>
                <h4> Jobs </h4>
                <h4> Cookie Preferences</h4>
                <h4> Legal Notices </h4>
              </div>
              <div className='one'>
                <h4> Account </h4>
                <h4> Ways to Watch </h4>
                <h4> Corporate Information </h4>
                <h4> Only on Netflix </h4>
              </div>
              <div className='one'>
                <h4> Media Centre</h4>
                <h4> Terms of Use </h4>
                <h4> Contact Us</h4>
                <h4> Speed Test </h4>
              </div>
            </div>
            <h2> Netflix India</h2>
          </div>
        
    </div>
      </>
  )
}

export default SignIn;