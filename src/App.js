import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavigationBar from './components/NavigationBar';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SbomList from './pages/SbomList';
import SbomDetails from './pages/SbomDetails';
import SbomUpload from './pages/SbomUpload';
import SbomCompare from './pages/SbomCompare';
import SbomSearch from './pages/SbomSearch';
import SbomStatistics from './pages/SbomStatistics';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content">
        <NavigationBar />
        <Container fluid>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/sboms" element={<SbomList />} />
            <Route path="/sboms/:filename" element={<SbomDetails />} />
            <Route path="/upload" element={<SbomUpload />} />
            <Route path="/compare" element={<SbomCompare />} />
            <Route path="/search" element={<SbomSearch />} />
            <Route path="/statistics" element={<SbomStatistics />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;