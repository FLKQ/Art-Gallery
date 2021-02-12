import React from 'react';
import Navbar from './Components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Header from './Components/Header';
import Exhibition from './Components/Exhibition';
import Events from './Components/Events';
import Gallery from './Components/Gallery';
import AboutUs from './Components/AboutUs';
import Testimonials from './Components/Testimonials';
import Articles from './Components/Articles';
import ContactUs from './Components/ContactUs';
import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Router>
          <GlobalStyle/>
          <Navbar/>
          <Header/>
          <Exhibition/>
          <Events/>
          <Gallery/>
          <AboutUs/>
          <Testimonials/>
          <Articles/>
          <ContactUs/>
          <Footer/>
          <Switch>
            <Route path = "/"/>
          </Switch>
       </Router>
    </>
  );
}

export default App;
