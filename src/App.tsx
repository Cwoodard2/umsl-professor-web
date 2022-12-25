import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Homepage from './pages/Homepage';
import CommunityEngagement from './pages/CommunityEngagement';
import MappingAbortion from './pages/MappingAbortion';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/Teaching" element={<Teaching />}></Route>
        <Route path="/CommunityEngagement" element={<CommunityEngagement />}></Route>
        <Route path="/Research" element={<Research />}></Route>
        <Route path="/MappingAbortion" element={<MappingAbortion />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
