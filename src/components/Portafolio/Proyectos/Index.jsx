import React from 'react'
import { Card } from 'antd';


const { Meta } = Card;
export default class Proyectos extends React.Component{

    render(){
        return(
            <Card
            hoverable
             className="col-lg-4"
          >
            <Meta
              title="Encriptacion y desencriptacion"
              description={
              <div > <p style={{color:'dark'}}>Aplicación web para encryptar y desencriptar Mensajes <br/>Hecha con: Golang y React</p>
              <button className="btn btn-warning">Ver Demo</button>{' '}
              <button className="btn btn-primary">Ver Repositorio</button>
              </div>}
            />
          </Card>
        )
    }
    
}