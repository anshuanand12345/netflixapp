import Main from './Main';
import './App.css';
import { Route, Routes } from "react-router-dom";
import SignIn from './SignIn';
import Getstarted from './Getstarted';


function App() {
  return (
  
      <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />}></Route>
        <Route exact path="/signin" element={<SignIn />}></Route>
        <Route path="/movies" element={<Getstarted />}></Route>
      </Routes>
     
      </div>
   
  );
}

export default App;
