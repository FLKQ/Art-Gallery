import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header';
import Exhibition from './Components/Exhibition';


function App() {
  return (
    <>
        <Router>
          <GlobalStyle/>
          <Navbar/>
          <Header/>
          <Exhibition/>
          <Switch>
            <Route path = "/"/>
          </Switch>
       </Router>
    </>
  );
}

export default App;
