import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './CMSBackEnd/loginPage';
import ResearchEditor from './CMSBackEnd/ResearchEditor';
import ComEngageEditor from './CMSBackEnd/ComEngageEditor';
import ClassCardEditor from './CMSBackEnd/ClassCardEditor';
import Homepage from './pages/Homepage';
import CommunityEngagement from './pages/CommunityEngagement';
import MappingAbortion from './pages/MappingAbortion';
import Research from './pages/Research';
import Teaching from './pages/Teaching';
import AboutMe from './pages/AboutMe';
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
        <Route path="AboutMe" element={<AboutMe />}></Route>
        <Route path="/LoginPage" element={<LoginPage />}></Route>
        <Route path="/ResearchEditor" element={<ResearchEditor />}></Route>
        <Route path="/ComEngageEditor" element={<ComEngageEditor />}></Route>
        <Route path="/ClassCardEditor" element={<ClassCardEditor />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
