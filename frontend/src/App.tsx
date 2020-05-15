import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./components/NavigationBar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <NavigationBar/>
      <Router>
        <Route path="/" component={Home}/>
      </Router>
    </>
  );
}

export default App;
