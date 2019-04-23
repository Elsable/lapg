import React, { Component } from 'react';
import { Card } from 'antd';
import { fr } from './FR';

export default class CardPrincipal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			frs: fr[0]
		};
	}

	render() {
		const fr = this.state.frs;
		console.log(fr);
		console.log(fr.frcss);
		console.log(fr.frjs);

		if (fr.length === 0) {
			return <div>No hay items</div>;
		}

		let DatoCSSFR = fr.frcss.map((item) => (
			<div className=" col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ paddingTop: 10 }}>
				<Card>
					{item.nombre}
					<br />
					<img style={{ width: 32 }} src={item.imagen} />
				</Card>
			</div>
		));

		let DatoJSFR = fr.frjs.map((item) => (
			<div className=" col-sm-4 col-md-4 col-lg-4 col-xl-4" style={{ paddingTop: 10 }}>
				<Card>
					{item.nombre}
					<br />
					<img style={{ width: 32 }} src={item.imagen} />
				</Card>
			</div>
		));

		return (
			<div className="jumbotron">
				<div className="row">
					<div
						className=" col-sm-6 col-md-6 col-lg-6 col-xl-6 border-right border-dark"
						style={{ background: '#eee', borderBottomColor: 'red' }}
					>
						<div className="border-bottom border-dark">
							<h5 className="display-4">
								{' '}
								Frond End CSS<br />Frameworks 
							</h5>
						</div>

						<div className="row">{DatoCSSFR}</div>
            {/* <h5 class="display-4">
								{' '}
								Componentes de estilos
                {/* <div className="col-md-8 center" style={{ paddingTop: 10 }}>
				<Card w>
					Styled Components
					<br />
					<img  style={{ width: 160,background:"#e84393" }} src="https://www.styled-components.com/static/logo.png" />
				</Card>
			</div> 
							</h5> */}
					</div>
					<div className="col-sm-6 col-md-6 col-lg-6 col-xl-6 border-left border-dark">
						<div className="border-bottom  border-dark">
							<h5 className="display-4">
                {' '}
                Frond End JS
								<br />Frameworks 
							</h5>
						</div>

						{DatoJSFR}
					</div>
				</div>
			</div>
		);
	}
}
