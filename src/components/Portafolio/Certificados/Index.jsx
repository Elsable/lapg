import React, { Component } from 'react'
import { Card } from 'antd';
import { certificado } from './Certificados'
import {
    Form, Icon, Input, Button,
} from 'antd';
import { GET_ALL_COURSES } from "./../../../queries";
import { Query } from "react-apollo";

import { Modal } from './Modal';
const { Meta } = Card;






export class Certificados extends Component {

    render() {

        return (
            <div className=" col-sm-12 col-md-12 col-lg-12 col-xl-12">

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
                    {({ data, loading, error }) => {
                        console.log(data)
                        if (loading) return <div>Loading</div>
                        if (error) return <div>Error</div>
                        {                                                               
                            return data.getAllCourses.map((certi, i) => <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3">
                                <Modal imagen={certi.image} link={certi.link} title={certi.title} description={certi.description} plataform={certi.plataform} technologies={certi.technologies}><Card
                                    hoverable
                                    cover={<img src={certi.image} className="img-thumbnail" />}
                                >
                                    <Meta
                                        description={<div> <h5 style={{color:"darkslategrey"}}>  {certi.plataform}</h5>
                                                   <h4 style={{color:"black"}}> {certi.title}</h4>
                                         </div>}

                                    />
                                </Card>
                                </Modal>
                            </div>
                            )
                        }
                    }}
                </Query>
            </div>
        )
    }
}

export default Certificados
