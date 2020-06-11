import React from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TimerPage from './components/TimerPage/TimerPage';
import Calculator from './components/Calculator/Calculator';

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/ratios'>
          <Calculator />
        </Route>
        <Route path='/'>
          <TimerPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
