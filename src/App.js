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
           <a href="https://www.linkedin.com/in/lapg" target="_blank" className="btn  btn-li btn-lg wow fadeInLeft" data-wow-delay="0.2s"><i className="fa fa-linkedin left"></i> Linkedin</a> 
        </div>
        

        <div className="footer-copyright" style={{ backgroundColor:"#3E4551",color:"#fff" }}>
            <div className="container-fluid"> 2019 Luis Antonio Padre Garcia </div>
            
        </div>
      </div>
    );
  }
}

export default App;
