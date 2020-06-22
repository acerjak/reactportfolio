import React from 'react';
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar>
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </Navbar>
        <Switch> 
          <div className="container">
            <div className="row">
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            </div>
          </div>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
