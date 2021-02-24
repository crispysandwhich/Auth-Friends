import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import Friends from './components/Friends';
// import AddFriends from './components/AddFriends';

function App() {
  return (
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginForm} />
        <PrivateRoute path="/friends" component={Friends} />
        {/* <PrivateRoute path="/friends/add" component={AddFriends} /> */}
      </Switch>

    </div>
  );
}

export default App;
