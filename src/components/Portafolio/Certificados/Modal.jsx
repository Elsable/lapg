import React, { Component } from 'react'
import {Card,Button, Modal as Modal1 } from 'antd';
import certificado from './Img/UC-BMGQ4JSD.jpg'

export class Modal extends Component {
    state = { visible: false }
    showModal = () => {
        this.setState({
            visible: true,
        });
    }

    handleOk = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }
    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    }


    render() {
        return (
            <div>
                <a onClick={this.showModal}>
                    {this.props.children}
                </a>

                <Modal1
                
                    title={<div  style={{textAlign:'center'}}><p>{this.props.plataform}</p>{this.props.title}</div>}
                      
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                ><center>
                   <Card
                    hoverable
                    cover={<img src={this.props.imagen} className="img-thumbnail" />}
                ></Card>
                <p style={{color:'dark'}}>
                Tecnologias: {this.props.technologies}
                <br/>
                Descripcion: {this.props.description}</p>
                <Button type="primary"href={this.props.link}>
                ver certificado
                </Button></center>
                  
        </Modal1>
            </div>
        )
    }
}

export default Modal
