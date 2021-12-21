import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Toolbar from "./components/Toolbar/Toolbar";
import RightSidebar from "./components/RightSidebar/RightSidebar";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";

const App = (props) => {
  return (
      <div className='app-wrapper'>
        <Header />
        <LeftSidebar />
        <Toolbar />
        <RightSidebar />
        <MainContent />
        <Footer />
      </div>
  )
}

export default App;
