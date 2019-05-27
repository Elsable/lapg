import React from 'react'
import { Card } from 'antd';
import axios from 'axios'

const { Meta } = Card;
export default class Proyectos extends React.Component{
  constructor() {
    super();
    this.state = {
      proyecto: [],
    };
  }

  componentDidMount() {
    this.ObtenerLista();
    
  }
  ObtenerLista() {
    axios.get(`http://localhost:3030/api/proyecto`).then(res => {
      this.setState({ proyecto: res.data.proyectos});
    });
  }

    render(){
      console.log(this.state.proyecto)
      const datos = this.state.proyecto;
      if (datos.length === 0) {
        return <div>No hay datos disponibles</div>;
      }
  
      let DatoRender = this.state.proyecto.map(dato => (
        
        <Card
        hoverable
         className="col-sm-4 col-md-4 col-lg-4 col-xl-4"
      >
        <Meta
          title={dato.name}
          description={
          <div > <p style={{color:'dark'}}>{dato.description}<br/>Hecha con:{dato.technologies}</p>
          <button className="btn btn-warning" ><a href={dato.link} style={{color:'#fff'}}>Ver Demo</a></button>{' '}
          <button className="btn btn-primary" ><a href={dato.github} style={{color:'#fff'}}>Ver Repositorio</a></button>{' '}
          
          </div>}
        />
      </Card>
  
      ));
  
        return(
          <div className="col-md-12" style={{padding:3}}>
          {DatoRender}
</div>


        )
    }
    
}