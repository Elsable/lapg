import React, { Component } from 'react'
import { Navbar } from '../components/Util/Navbar';
import { Inicio } from '../components/Inicio/Inicio';
import { Aboutme } from '../components/Sobremi/Index';
import Todos from '../components/Portafolio/Index';
import { BackTop } from 'antd';


export class RouteIndex extends Component {

  render() {
    return (
      <div>

        <BackTop>
          <BackTop />
          <br /><br />
          <div className="ant-back-top-inner" style={{ color: '#1088e9' }}>Arriba</div>
        </BackTop>


        <Navbar />
        <Inicio />

        <Aboutme />
        <div id="?">

        <Todos />
        </div>
      </div>
    )
  }
}

export default RouteIndex
