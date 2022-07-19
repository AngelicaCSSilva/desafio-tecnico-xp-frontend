import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import './App.css';
import Assets from './components/pages/Assets';
import Bank from './components/pages/Bank';
import Login from './components/pages/Login';
import FinanceProvider from './context/FinanceProvider';

function App() {
  return (
    <FinanceProvider>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/assets" component={Assets} />
        <Route path="/bank" component={Bank} />
      </Switch>
    </FinanceProvider>
  );
}

export default App;
