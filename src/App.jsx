import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Bank from './components/pages/Bank';
import Login from './components/pages/Login';
import Stocks from './components/pages/Stocks';
import FinanceProvider from './context/FinanceProvider';

function App() {
  return (
    <div className="App">
      <FinanceProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/bank" element={<Bank />} />
        </Routes>
      </FinanceProvider>
    </div>
  );
}

export default App;
