import React, { Component } from 'react'
import { Tabs, Icon } from 'antd';
import { Lenguajes } from './Lenguajes';
import CardPrincipal from './FrontEnd/CardPrincipal';

const TabPane = Tabs.TabPane;


export class Skills extends Component {


  render() {
    return (
      <div>
   <Tabs defaultActiveKey="2">
    <TabPane tab={<span>
      <img style={{width:25}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFDSURBVGhD7Zm/agJBEMYPLNTKQojG0gfwCSzt06UIaU2d2hfwKQX/YCE+RPJ97gWmWOIdOzvuyfzgwznBnfuxNwi3leM4TowZ8ol8ZQ57vCJZ4MJX5ILsMoc92GuCqPOOcPHe7Sov7MFe7KnOB3IIpQnsxZ7qPLXIj3Ik5iLfyCoxXOPhIstQtuYFeQvlbY3OiiyQbSi7LSIpQkQzEnMRH3bEhz0FbRFJESKakZiL+LAjPuwpaItIihDRjMRUJDa4KZGYiuTERe4RE9kg41Cq4yL3iIkM688cmIqckXkoo4yQv9egrNtQzI7wxvn6k7851nUbGVOR/2ZkjeyRPjJAKMPvmlKUCG+eEsWLNHm0KHCq62IfrabDzp1oI0GK2ZFUTEX8n70BpiI5ySbyNEdvU4SLd/4wlFDG6niavRzHcSRV9Qu9oTZwYlJ0cgAAAABJRU5ErkJggg=="></img>
      BackEnd
    
    </span>} key="1">
    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
    <Lenguajes/>
    
    </div>
    </TabPane>
    <TabPane tab={<span>
      <img style={{  width:25}} src="https://angular.io/assets/images/logos/angular/angular.png"/>
      FrontEnd
    <img style={{  width:32}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png"/>
    </span>} key="2">
      <div className=" col-sm-12 col-md-12 col-lg-12 col-xl-12">
    
    <CardPrincipal/>
    
    </div>
    </TabPane>
    <TabPane tab={<span>
      <Icon type="apple" />Movil {' '}<Icon type="android" /></span>} key="3">
      Movil
    </TabPane>
  </Tabs>
      </div>
    )
  }
}

export default Skills
