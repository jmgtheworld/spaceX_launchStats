import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch';
import Capsules from './components/Capsules';
import LandingZones from './components/LandingZones';
import Menu from './components/Menu';
import './App.css';
import logo from './spaceX.jpg'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',  
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client = {client} >
      <Router>
        <div className="container">
          <img 
            src = {logo} 
            alt = "spaceX" 
            style = {{width: 250, display: 'block', margin: 'auto'}}
          />
          <Menu />
          <Route exact path = "/" >
            <Launches />
          </Route>
          <Route exact path = "/launch/:launch_id" component = {Launch} />
          <Route exact path = "/capsules" >
            <Capsules />
          </Route>
          <Route exact path = "/landingZones" >
            <LandingZones />
          </Route>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
