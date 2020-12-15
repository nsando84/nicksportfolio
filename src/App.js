import Navbar from './components/navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Contact from './containers/Contact';
import Projects from './containers/Projects'

function App() {
  return (
    <BrowserRouter>

      <Navbar />
      <Switch>
        <Route exact path='/contact' component={Contact}/>
        <Route exact path='/projects' component={Projects}/>
        <Route path='/home' component={Home}/>
      </Switch>
      
    </BrowserRouter>
  );
}

export default App;
