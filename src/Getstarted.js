import React from 'react';
import './App.css';
import Row from './Row';
import Jan from './Jan';


const Getstarted = () => {
  return (
    <div className='movies'>
      <div className='header1'>
        <div className='logo'>
          <img src='./image/netflixlogo.webp' alt='' />
        </div>
      </div>


      <div className='center1'>
        <Row Title="Trending Movies" />
        <Jan Title="Best on Netflix" />
        <Row Title="Trending Movies" />
        <Jan Title="Best on Netflix" />
        <Row Title="Trending Movies" />
        <Jan Title="Best on Netflix" />
           
      </div>

    </div>
  )
}

export default Getstarted;