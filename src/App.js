import React, { Component } from 'react';

import './App.css';
import { RouteIndex } from './Routes/Route';

class App extends Component {
  render() {

    return (
      <div className="App">
        <RouteIndex />
        <div className="App-header">
          <h1 className="App-title">Contacto <br />Mexico</h1>
        </div>
        

        <div className="footer-copyright" style={{ backgroundColor:"#3E4551",color:"#fff" }}>
            <div className="container-fluid"> 2019 Luis Antonio Padre Garcia </div>
            
        </div>
      </div>
    );
  }
}

export default App;
