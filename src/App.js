import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from './components/pages/Projects';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Certificate from './components/pages/Certificate';
import Education from './components/pages/Education';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/experience' element={<Experience/>} />
          <Route path='/certificate' element={<Certificate/>} />
          <Route path='/education' element={<Education/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
