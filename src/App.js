import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Projects from './containers/Projects/Projects'
import Amplify, { Analytics, API, Auth, graphqlOperation, Storage } from 'aws-amplify';

Analytics.autoTrack('session', {
  enable: true,
  provider: 'AWSPinpoint'
});

Analytics.autoTrack('pageView', {
  enable: true,
  eventName: 'pageView',
  type: 'SPA',
  provider: 'AWSPinpoint',
  getUrl: () => {
      return window.location.origin + window.location.pathname;
  }
});



function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Switch>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
        <Route path='/' component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
