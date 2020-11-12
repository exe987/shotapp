import React, { useContext, Fragment } from 'react';
import HeaderSesion from '../HeaderSesion/HeaderSesion';
import Footer from '../Footer/Footer';




import UsuarioContext from '../../context/usuario/usuarioContext';

const Index = () => {
	//CONTEXT DE USUARIOS
	const UsuariosdeContext = useContext(UsuarioContext);
	const { creaUsuario } = UsuariosdeContext;

	return (
		<Fragment>
			<HeaderSesion />
			<section className="hero is-medium is-family-primary is-transparent is-vcentered">
				<div className="hero-body">
					<h1 className="title is-1">SHOTAPP</h1>
					<h2 className="subtitle is-5">Mejora el desempeño de tu clase</h2>
				</div>
			</section>
			<Footer/>
		</Fragment>
	);
};

export default Index;
