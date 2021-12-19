import React from "react";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import MainContent from "./components/MainContent/MainContent";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Navbar />
        <MainContent />
      </div>
  )
}

export default App;
