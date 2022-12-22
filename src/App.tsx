import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CommunityEngagement from './pages/CommunityEngagement';
import MappingAbortion from './pages/MappingAbortion';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <p className='text-3xl font-bold underline text-red-600'>words</p>
    //   </header>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Teaching" element={<Teaching />}></Route>
        <Route path="/CommunityEngagement" element={<CommunityEngagement />}></Route>
        <Route path="/Research" element={<Research />}></Route>
        <Route path="/MappingAbortion" element={<MappingAbortion />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
