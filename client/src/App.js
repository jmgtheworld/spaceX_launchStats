import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './components/Launches';
import Launch from './components/Launch'
import './App.css';
import logo from './spaceX.jpg'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
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
          <Route exact path = "/" >
            <Launches />
          </Route>
          <Route exact path = "/launch/:id" component = {Launch} />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
