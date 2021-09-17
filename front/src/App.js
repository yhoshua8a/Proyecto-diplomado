import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from '@material-ui/core/Container';

import { Home, Login, Profile } from './pages';

function App() {
  return (
    <div className="App">

<Router>
      <header className="header-app">
 <h1>Plataforma Escolar</h1>

 <ul className="header-app__ul">
          <li>
            <Link to="/home" className="header-app__link">Home</Link>
          </li>
          <li>
            <Link to="/profile" className="header-app__link">Profile</Link>
          </li>
       
        </ul>
      </header>

      <section className="container-app">

      <Container maxWidth="md">
      <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
        </Container>

      </section>
   
      </Router>

 
    </div>
  );
}

export default App;
