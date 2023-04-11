import React, { useState } from 'react';
import './App.css';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const Questions = () => {
    const [showinfo, setshowinfo] = useState(false);
  return (
    <div className='accord'>
        <h1> Frequently ask Questions </h1>

        <div className='questions'>
           <div className='head1'>
                <h3> What is Netflix ?</h3>
                  <div className='icon' onClick={() => setshowinfo(!showinfo) }>
                     {
                          showinfo ? <CloseIcon /> : <AddIcon />
                     } 
                </div>
                 
           </div>

            <div className='para'>
            { 
              showinfo &&        <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                          You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                      </p>
            }
                
            </div>
        </div>


          <div className='questions'>
              <div className='head1'>
                  <h3> What is Netflix ?</h3>
                  <div className='icon' onClick={() => setshowinfo(!showinfo)}>
                      {
                          showinfo ? <CloseIcon /> : <AddIcon />
                      }
                  </div>

              </div>

              <div className='para'>
                  {
                      showinfo && <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                          You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                      </p>
                  }

              </div>
          </div>

          <div className='questions'>
              <div className='head1'>
                  <h3> What is Netflix ?</h3>
                  <div className='icon' onClick={() => setshowinfo(!showinfo)}>
                      {
                          showinfo ? <CloseIcon /> : <AddIcon />
                      }
                  </div>

              </div>

              <div className='para'>
                  {
                      showinfo && <p> Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                          You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                      </p>
                  }

              </div>
          </div>
    </div>
  )
}

export default Questions;