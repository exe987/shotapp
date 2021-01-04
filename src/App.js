import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Usuarios from './context/usuario/usuarioState';
import Jugadores from './context/jugadores/jugadoresState';
import HeaderSesion from './components/HeaderSesion/HeaderSesion';
import Index from './components/Index/Index';
import Footer from './components/Footer/Footer';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<Router>
			<Usuarios>
				<Jugadores>
					<HeaderSesion />
					<div className="container">
						<Switch>
							<Route path="/dashboard">
								<Dashboard />
							</Route>
							<Route path="/">
								<Index />
							</Route>
						</Switch>
					</div>
					<Footer />
				</Jugadores>
			</Usuarios>
		</Router>
	);
}
export default App;
