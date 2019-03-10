import React, { Component } from 'react'
import { Modal, Button } from 'antd';
import EstadisticaLenguaje from './EstadisticaLenguaje';

const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
export class Masinfo extends Component {

    state = {
        loading: false,
        iconLoading: false,
        modal1Visible: false,
        modal2Visible: false,
    }

    enterLoading = () => {
        this.setState({ loading: true });
    }

 

    setModal1Visible(modal1Visible) {
        
        this.enterLoading();
        
        sleep(500).then(() => {
            this.setState({ loading: false });
            this.setState({ modal1Visible });
          })
        

    }

    
    
    render() {
        return (
            <div>
                <Button type="primary" loading={this.state.loading} onClick={() => this.setModal1Visible(true)}>Ver más</Button>

                <Modal
                    title={'          Trabajos Realizados con                     '+this.props.titulo}
                    style={{ bot: 10 }}
                    visible={this.state.modal1Visible}
                    onOk={() => this.setModal1Visible(false)}
                    onCancel={() => this.setModal1Visible(false)}
                >
                    <EstadisticaLenguaje />
                </Modal>
                <br /><br />

            </div>

        )
    }
}

export default Masinfo
