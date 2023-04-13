import axios from 'axios';
import './App.css';
import React, { useEffect, useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const Row = (props) => {

    useEffect(() => {
        fetchtable();
    }, []);

const [ movies, setMovies ] = useState([]);

    const fetchtable = async () => {
        const result = await axios.get(`https://www.omdbapi.com/?apikey=487dbaec&s=titanic`);
        setMovies(result.data.Search);
        console.log(result.data.Search);
    }

    let box = document.querySelector('.row');

    const btnprev = () =>{
        let width = box.clientWidth;
       box.scrollLeft = box.scrollLeft - width;
    }

    const btnnext =() => {
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }


  return (
    <div className='move'>

    <div className='arrow'>
              <div className='back' onClick={btnprev}>
                  <button>  <ArrowBackIosIcon /> </button> 
              </div>
              <div className='forward' onClick={btnnext}>
                  <button> <ArrowForwardIosIcon /> </button>
              </div>
    </div>
        <div className='head1'>
            <h1> {props.Title} </h1>
        </div>

        <div className='row'>

              {
                  movies.map((values) => {
                      return (
                          <menu>
                              <div className='raye'>
                                  <div className='box1'>
                                      <img src={values.Poster} alt='' />
                                  </div>

                                  <div className='name'>
                                      <h1> {values.Title}</h1>
                                  </div>
                              </div>
                          </menu>
                      )
                  })}

        </div>
    </div>
  )
}

export default Row;
