import React, { Component } from 'react'
import { Tabs } from 'antd';
import { StickyContainer, Sticky } from 'react-sticky';
import certificao1 from './Certificados/UC-BMGQ4JSD.jpg'
import { Certificados } from './Certificados/Index';
import { Skills } from './Skills/Skills';

const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

export default class Todos extends Component {
constructor(props){
super(props);
}

    render() {
        return (
  <StickyContainer className="container">
    <Tabs defaultActiveKey="1" renderTabBar={renderTabBar}>
      <TabPane tab="Skills ★ " key="1" ><Skills/></TabPane>
      <TabPane tab="Trabajos" key="2">Estadia en CAASIM y en UNAM(Facultad de Psicologia)</TabPane>
      <TabPane tab="Certificados" key="3"><Certificados/></TabPane>
      <TabPane tab="Proyectos" key="4">Proyectos</TabPane>
    </Tabs>
  </StickyContainer>
        )
    }
}
