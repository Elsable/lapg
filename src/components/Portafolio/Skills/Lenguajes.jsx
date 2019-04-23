import React, { Component } from 'react'

import { Collapse, Progress } from 'antd';


import lenguajesB from './_lenguajes';
import { Masinfo } from './masinfo';
const Panel = Collapse.Panel;

export class Lenguajes extends Component {
 
  render() {

    return (
      <div className="row">

        {lenguajesB.items.map((lenguaje, i) => (
          <div key={i} className=" col-sm-3 col-md-3 col-lg-3 col-xl-3">
            <Collapse accordion active>
              <Panel header={<div>
                {lenguaje.lenguaje}
                <img width="20" src={lenguaje.imagen} alt="" />
              </div>
              } key="1">
                <img width="70" src={lenguaje.imagen} alt="" />
                <div>
                  Nivel de {lenguaje.lenguaje}: <Progress strokeLinecap="square" percent={parseInt(lenguaje.lvl)} />
                  <Masinfo titulo={lenguaje.lenguaje}/>
                </div>
                {/* <p>{lenguaje.frameworks.map(item => (
                  <div>
                    {item.framework}
                    <Progress strokeLinecap="square" type="circle" percent={item.lvl} />
                    <br/>
                    
                  </div>
                ))}</p> */}

              </Panel>
              {/* <Panel header="This is panel header 2" key="2">
      <p>{text}</p>
    </Panel>
    <Panel header="This is panel header 3" key="3">
      <p>{text}</p>
    </Panel> */}
            </Collapse>
          </div>
        ))}


      </div>

    )
  }
}

export default Lenguajes
