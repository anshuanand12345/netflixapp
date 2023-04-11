import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className='center'>
      <div className='header'>
        <div className='logo'>
          <img src='./image/netflixlogo.webp' alt='' />
        </div>
        <div className='headbutton'>
          <Link to="/signin">
            <button> Sign In </button>
          </Link>
        </div>
      </div>

      <div className='centertext'>
        <p> Unlimited movies, TV </p>
       <p> Shows and more. </p>
        <h4> Watch anywhere. Cancel anytime. </h4>
        <h5> Ready to watch? Enter your email to create or restart your membership. </h5>
        <div className='input'>
          <input type='email' placeholder='Enter Email' />
          <Link to="/movies">
            <button> Get Started </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Home;