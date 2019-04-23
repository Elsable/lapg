import React, { Component } from 'react'
import { Icon } from 'antd';

export class Navbar extends Component {


  render() {
    return (
      <div>
        <nav className="navbar navbar-fixed-top  navbar-expand-lg navbar-expand-md navbar-expand-xm navbar-light navbar-dark bg-dark">

        
          {/* <a classNameName="navbar-brand" href="#"> */}
          <a className="navbar-brand waves-effect waves-light active" href="#home" offset="30">LP
        <Icon type="qq" theme="outlined" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
              
                <a className="nav-link" href="#">Acerca de mi <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?">Skills</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?">Trabajos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#?">Certificados</a>
              </li>
            </ul>
          </div>
        </nav>
        <br/>
      </div>
    )
  }
}

export default Navbar
