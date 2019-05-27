import React, { Component } from 'react'
import imagen from './me.jpg'
export class Aboutme extends Component {

    render() {
        return (
            <div className="container">
                <div className="">
                    <div className=" col-sm-7 col-md-7 col-lg-7 col-xl-7">
                    <h4 align="justify">
                    <br/>
                        Hola, mi nombre es Luis Antonio actualmente tengo 21 años, soy desarrollador autodidacta y
                        nunca dejo de reinventarme.
                        Cuento con experiencia distribuida entre múltiples facetas, lenguajes y entornos. Puedo programar
                        aplicaciones complejas o para tareas específicas.
                        Actualmente estoy trabajando para mejorar mis habilidades técnicas al
                        tomar cursos en la plataforma Udemy.
                        Estoy buscando un trabajo a tiempo completo y estoy solicitando activamente trabajos relacionados con la técnica. Algunos de los roles que estoy abierto a incluir son ingeniero de software, desarrollador web de fullstack,
                        desarrollador web front-end, desarrollador web back-end, analista de tecnología.  En una empresa, valoro la cultura, el impacto y la misión. 
                        Por favor, siéntase libre de contactarme para oportunidades de trabajo! 
                    </h4>
                </div>
                    <div className=" col-sm-5 col-md-5 col-lg-5 col-xl-5">
                    <center>

                    {/* <img  src={imagen} height="400px" width="90%"/> */}
                    <h2>Contactame</h2>
                    <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="es_ES" data-type="vertical" data-theme="dark" data-vanity="lapg"><a className="LI-simple-link" href='https://mx.linkedin.com/in/lapg?trk=profile-badge'>Luis Antonio Padre García</a></div>
                    </center>
                    </div>
                    </div>
            </div> 
        )
    }
}

export default Aboutme
