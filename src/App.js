import React, { useEffect } from 'react';
import Navbar from './components/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import ReactGA from 'react-ga';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Projects from './containers/Projects/Projects';



ReactGA.initialize('UA-186306647-1')
const browserHistory = createBrowserHistory()
browserHistory.listen((location, action) => {
  ReactGA.pageview(location.pathname + location.search)
})

function App() {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search)
  }, [])

  return (
    <Router browserHistory={browserHistory}>

      <Navbar />
      <Switch>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
        <Route path='/' component={Home}/>
      </Switch>
      
    </Router>
  );
}

export default App;
