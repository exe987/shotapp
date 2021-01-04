import React, { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const HeaderSesion = () => {
	//MODAL
	const [modal, mostrarModal] = useState(false)

	const toggle = () => {
		if(modal){
			mostrarModal(false)
		}else{
			mostrarModal(true)
		}
	}

	//ESTADOS LOCALES
	const [ isActive, setisActive ] = useState(false);

	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			 <Login toggle= {toggle} modal= {modal}/>
			<div className="navbar-brand">
				<a className="navbar-item" href="!#">
				<span  className="title is-2 has-text-white">SHOTAPP <i className="fas fa-basketball-ball"></i></span>	 
				</a>
				<a
					onClick={() => {
						setisActive(!isActive);
					}}
					role="button"
					className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
					aria-label="menu"
					aria-expanded="false"
					data-target="navbarBasicExample"
				>
					<span aria-hidden="true" />
					<span aria-hidden="true" />
					<span aria-hidden="true" />
				</a>
			</div>
			<div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
				<div className="navbar-start">
					<a className="navbar-item">Home</a>
					<a className="navbar-item">Resultados</a>
				</div>
				<div className="navbar-end">
					<a className="navbar-item">
						<span>
							CREA USUARIO <i className="fas fa-user-plus" />
						</span>
					</a>
					<a className="navbar-item" onClick={toggle}>
						<span>
							INICIAR SESION <i className="fas fa-sign-in-alt" />
						</span>
					</a>
				</div>
			</div>
		</nav>
	);
};
export default HeaderSesion;
