import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact  from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";




function App() {


  return (
    <>
      <div className="app">
        <Header/>

          <Routes>
            <Route path ="/" element = {<Home/>} />
            <Route path ="/contact" element = {<Contact/>} />            
            <Route path ="/about" element = {<About/>} />
            <Route path ="/projects" element = {<Projects/>} />
            
           </Routes>
        <Footer/>
      </div>
    </>
   
  );
}

export default App;