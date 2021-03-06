import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import AboutUs from './AboutUs.js';
import Settings from './Settings.js'  
import NavbarOut from './NavbarOut.js';
import Team from './Team.js';
import Locationfound from './located.js';

function App() {


  return (
    <Router>
      <div className="App">


        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/team">
            <Team />
          </Route>
          <Route exact path="/aboutus">
            <AboutUs />
          </Route>
          <Route exact path="/contacts">
            <contacts />
          </Route>
          <Route exact path="/settings">
            <Settings />
          </Route>
          <Route exact path="/sync">
            <sync />
          </Route>
          <Route exact path='/tabs'>
             <tabs />
          </Route>
          <Route exact path='/located'>
            <Locationfound />
          </Route>


        </Switch>


      </div>

    </Router>
  );
}

export default App;
