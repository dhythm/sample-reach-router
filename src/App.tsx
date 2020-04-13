import { Link, Router } from '@reach/router';
import React from 'react';
import './App.css';
import logo from './logo.svg';

const Home: React.FunctionComponent<any> = () => (
  <div>
    <h2>Welcome</h2>
  </div>
);

const Dashboard: React.FunctionComponent<any> = () => (
  <div>
    <h2>Dashboard</h2>
  </div>
);

const App = () => {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <Link to="/">Home</Link> <Link to="dashboard">Dashboard</Link>
      </nav>
      <Router>
        <Home path="/" />
        <Dashboard path="dashboard" />
      </Router>
    </div>
  );
};

export default App;
