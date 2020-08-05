import React from 'react';
import {
  Switch,
  Link,
  Route,
  BrowserRouter as Router
} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import './App.css'
import './reset.css'

function App() {
  return (
    <Router>
      <div>
        <Header>
          <Link to="/">About</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact</Link>
        </Header>
        <Switch> 
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
