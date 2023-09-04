import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Nav from './components/common/nav';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
      </Routes>
    </Router>
  );
}

export default App;
