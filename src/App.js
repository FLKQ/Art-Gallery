import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';


function App() {
  return (
    <>
        <Router>
          <GlobalStyle/>
          <Navbar/>
          <Switch>
            <Route path = "/"/>
          </Switch>
       </Router>
    </>
  );
}

export default App;
