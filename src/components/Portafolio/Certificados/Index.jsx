import React, { Component } from 'react'
import { Card } from 'antd';
import {certificado} from './Certificados'
import {
    Form, Icon, Input, Button,
  } from 'antd';
import {GET_ALL_COURSES} from "./../../../queries";
import {Query} from "react-apollo";

import { Modal } from './Modal';
const { Meta } = Card;






export class Certificados extends Component {

    render() {
        
        return (
            <div className="col-md-12">

<Form layout="inline" onSubmit={this.handleSubmit}>

        <Form.Item
          label="Buscar Certificados">
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="React, Golang, Javascript..." />
        </Form.Item>
        <Form.Item>
        <Button
            type="primary"
            htmlType="submit">
            Buscar
        </Button>
        </Form.Item>
        </Form>





<Query query={GET_ALL_COURSES}>
        {({data,loading,error})=>{                                              if(loading) return <div>Loading</div>
                if(error) return <div>Error</div>
                {
                return data.getAllCourses.map((certi,i)=><div>
                <Modal imagen={certi.imagen} link={certi.link}><Card
                    hoverable
                    style={{ width: 260 }}
                    cover={<img src={certi.imagen}  className="img-thumbnail" />}
                >
                    <Meta
                        description={certi.description}
                        
                    />
                </Card>
                </Modal> 
            </div>
                )}
	}} 
             </Query>    
            </div>
        )
    }
}

export default Certificados
