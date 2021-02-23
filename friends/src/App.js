import React from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Friends from './components/Friends';

import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/friends" component={Friends} />
      </Switch>

    </div>
  );
}

export default App;
