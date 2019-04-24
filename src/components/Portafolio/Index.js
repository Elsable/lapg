import React, { Component } from 'react'
import { Tabs } from 'antd';

import { StickyContainer, Sticky } from 'react-sticky';

import PDF from 'react-pdf-js';

import { Certificados } from './Certificados/Index';
import Proyectos from './Proyectos/Index';
import { Skills } from './Skills/Skills';
import LAPG from './CV/DevOps-Developer-Luis-Antonio-Padre.pdf'

const TabPane = Tabs.TabPane;

const renderTabBar = (props, DefaultTabBar) => (
  <Sticky bottomOffset={80}>
    {({ style }) => (
      <DefaultTabBar {...props} style={{ ...style, zIndex: 1, background: '#fff' }} />
    )}
  </Sticky>
);

export default class Todos extends Component {
  state = {};

  onDocumentComplete = (pages) => {
    this.setState({ page: 1, pages });
  }

  handlePrevious = () => {
    this.setState({ page: this.state.page - 1 });
  }

  handleNext = () => {
    this.setState({ page: this.state.page + 1 });
  }

  renderPagination = (page, pages) => {
    let previousButton = <li className="previous" onClick={this.handlePrevious}><a href="#?"><i className="fa fa-arrow-left"></i> Atras</a></li>;
    if (page === 1) {
      previousButton = <li className="previous disabled"><a href="#?"><i className="fa fa-arrow-left"></i> Atras</a></li>;
    }
    let nextButton = <li className="next" onClick={this.handleNext}><a href="#?">Siguiente <i className="fa fa-arrow-right"></i></a></li>;
    if (page === pages) {
      nextButton = <li className="next disabled"><a href="#?">Siguiente <i className="fa fa-arrow-right"></i></a></li>;
    }
    return (
      <nav>
        <ul className="container jumbotron">
        <div className="    row">
          <div className="pager  col-sm-2 col-md-2 col-lg-2 col-xl-2">
            {previousButton}
          </div>
          <div  className="pager col-sm-8 col-md-8 col-lg-8 col-xl-8 row">
          <div className=" col-sm-6 col-md-6 col-lg-6 col-xl-6">
          <form method="get" action="https://cdn-files-occ.s3.amazonaws.com/documents/8f/8fjO9mRZnZdjNTHKaCpLZw2/resumefile/Developer-Luis-Antonio-Padre.pdf?AWSAccessKeyId=AKIAITM5FJ4VJNPOAEOA&Expires=1556048805&Signature=y221Ap1NAwQeINp5eGIZWyTTYKM%3D">
          <button className="btn btn-primary  " type="submit">Ver CV</button>
          </form>
        </div>
          <div className=" col-sm-6 col-md-6 col-lg-6 col-xl-6">
            
          
          <form method="get" action="https://cdn-files-occ.s3.amazonaws.com/documents/8f/8fjO9mRZnZdjNTHKaCpLZw2/resumefile/Developer-Luis-Antonio-Padre.pdf?AWSAccessKeyId=AKIAITM5FJ4VJNPOAEOA&Expires=1556048805&Signature=y221Ap1NAwQeINp5eGIZWyTTYKM%3D">
                    <button className="btn btn-primary  " type="submit">Descargar CV</button>
          </form>

          </div>

          
          </div>
          <div  className="pager  col-sm-2 col-md-2 col-lg-2 col-xl-2">
            {nextButton}
          </div>
          </div>
        </ul>
      </nav>
    );
  }

  constructor(props) {
    super(props);
  }


  render() {
    let pagination = null;
    if (this.state.pages) {
      pagination = this.renderPagination(this.state.page, this.state.pages);
    }
    return (
      <StickyContainer className="container">
        <Tabs defaultActiveKey="4" renderTabBar={renderTabBar}>
          <TabPane tab="Habilidades duras ★ " key="1" ><Skills /></TabPane>
          <TabPane tab="Trabajos" key="2"> Estadia en CAASIM <br/> en UNAM(Facultad de Psicologia)</TabPane>
          <TabPane tab="Certificados" key="3"><Certificados /></TabPane>
          <TabPane tab="Proyectos" key="4"><Proyectos/></TabPane>
          <TabPane tab="Curriculum vitae" key="5">
            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">


              {pagination}
              <div className="row">
                <div className="col-sm-3 col-md-3 col-lg-3 col-xl-3"></div>

                <PDF
                  file={LAPG}
                  onDocumentComplete={this.onDocumentComplete}
                  page={this.state.page}
                />
                <div className=" col-sm-1 col-md-1 col-lg-1 col-xl-1"></div>


              </div>
            </div>
          </TabPane>
        </Tabs>
      </StickyContainer>
    )
  }
}
