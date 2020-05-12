import React from 'react';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavigationBar from "./components/NavigationBar";
import Game from "./components/Game";

function App() {
  return (
    <>
      <NavigationBar/>
      <Router>
        <Route path="/" component={Game}/>
      </Router>
    </>
  );
}

export default App;
