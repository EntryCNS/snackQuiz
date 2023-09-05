import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import Nav from './components/common/nav';
import GameStart from './components/gameStart';
import GameMain from './components/gameMain';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/gameStart" element={<GameStart/>} />
        <Route path='/gameMain' element={<GameMain/>} />
      </Routes>
    </Router>
  );
}

export default App;
