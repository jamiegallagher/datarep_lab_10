import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/contents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Create } from './components/create';
import { Read } from './components/read';

class App extends Component {
  render() {
    return (
      //outputting Hello World and The current time to the screen
      //We also use the header, content and footer taga 
      //Which are declared in the header.js, contents.js and footer.js files to export the contents of the file 
      //And output onto the screen of App.js
      <Router>
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          <Switch>
          <Route path='/' component={Content} exact/>
          <Route path='/create' component={Create} ecact />
          <Route path='/read' component={Read} exact/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
