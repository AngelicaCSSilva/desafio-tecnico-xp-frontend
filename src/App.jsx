import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bank from './components/pages/Bank';
import Login from './components/pages/Login';
import Stocks from './components/pages/Stocks';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/bank" element={<Bank />} />
      </Routes>
    </div>
  );
}

export default App;
