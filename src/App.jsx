import React from 'react';
import { Switch, Route } from 'react-router-dom';

// import './App.css';
import Bank from './components/pages/Bank';
import Login from './components/pages/Login';
import Stocks from './components/pages/Stocks';
import FinanceProvider from './context/FinanceProvider';

function App() {
  return (
    <div className="App">
      <FinanceProvider>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/stocks" component={Stocks} />
          <Route path="/bank" component={Bank} />
        </Switch>
      </FinanceProvider>
    </div>
  );
}

export default App;
