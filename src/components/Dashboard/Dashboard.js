import React, { Fragment } from 'react';
import IngresoJugadores from '../IngresoJugadores/IngresoJugadores';
import DatosJugador from '../DatosJugador/DatosJugador';
import Desempeño from '../Desempeño/Desempeño';

const Dashboard = () => {
	return (
		<Fragment>
			<div className="container">
				<div className="columns">
					<div className="column is-12-mobile is-12-tablet">
						<IngresoJugadores />
					</div>
				</div>
			</div>
			<div className="container">
			
					<DatosJugador />
			
			</div>
		</Fragment>
	);
};

export default Dashboard;
