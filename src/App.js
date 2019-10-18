import React from 'react';
import logo from './logo.svg';
import {Button} from 'antd';
import './App.css';
import {renderRoutes} from "react-router-config";
import {BrowserRouter, Link} from "react-router-dom";
import routers from './router'

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
          >
            <Button type="primary">Learn React</Button>
          </a>
          <div style={{height: 200}}>
            <BrowserRouter>
              <Button.Group>
                <Button> <Link to='/'>HOME</Link> </Button>
                <Button> <Link to='/child/1/grand-child'>crand child</Link> </Button>
                <Button> <Link to='/child/1'>child</Link> </Button>
              </Button.Group>
              {renderRoutes(routers)}
            </BrowserRouter>
          </div>
        </header>
      </div>
  );
}

export default App;
