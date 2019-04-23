import React, { Component } from 'react'
import BackgroundImageOnLoad from 'background-image-on-load';
import imag from './Img/bg_2.jpg'

import { Card } from 'antd';

export class Inicio extends Component {

    state = {
        bgIsLoaded: false
    };


    render() {
        const { bgIsLoaded } = this.state;

        return (
            <div className="App">
                <div
                    style={{
                        height: 250,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundImage: `url(${!bgIsLoaded ? 'https://picsum.photos/310/310?blur' : `${imag}`})`,
                    }}
                >
                    <div className="jumbotron__background" style={{ height: 250 }}>
                        {/* <div className="jumbotron__background" style={{ height: 250, background: 'linear-gradient(to top, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.45))' }}> */}
                        <br />
                        {/* backgroundImage: `url(${!bgIsLoaded ? 'https://picsum.photos/310/310?blur' : 'https://picsum.photos/1600/310'})` */}

     <div className="jumbotron__background" style={{ height: 250, background: 'linear-gradient(to top, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0.45))' }}>
                        <br />
                        {/* backgroundImage: `url(${!bgIsLoaded ? 'https://picsum.photos/310/310?blur' : 'https://picsum.photos/1600/310'})` */}

                        <div className="layout align-center"><div className="flex text-xs-center">
                            <br />
                            <h1 className="display-5"> <br />LUIS ANTONIO PADRE GARCIA</h1>
                            {/* Hola! Soy Jesús García */}
                            <h4 className="black--text">DESARROLLADOR FULL-STACK</h4></div></div>
                        {/* <img src={imag} classNameName="App-logo" alt="logo" /> */}
                    </div>
</div>


                    <BackgroundImageOnLoad
                        src={'https://unsplash.it/1200/310?random'}
                        onLoadBg={() =>
                            this.setState({
                                bgIsLoaded: true
                            })}
                        onError={err => console.log('error', err)}
                    />
                </div>
                <Card className=" col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <strong><h3>«Cualquiera puede hablar. Enséñame el código»
                    </h3></strong> <br />
                    <span>
                    <h4>-Linus Torvalds</h4></span>
                </Card>
            </div>
        )
    }
}

export default Inicio
