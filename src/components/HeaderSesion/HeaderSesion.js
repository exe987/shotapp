import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UsuarioContext from '../../context/usuario/usuarioContext';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const HeaderSesion = () => {
	const UsuariosdeContext = useContext(UsuarioContext);
	const { sesion, } = UsuariosdeContext;

	//ESTADOS DE MODAL
	const [ modal, mostrarModal ] = useState(false);
	const [ modalb, mostrarModalb ] = useState(false);

	const toggle = () => {
		if (modal) {
			mostrarModal(false);
		} else {
			mostrarModal(true);
		}
	};

	const toggleb = () => {
		if (modalb) {
			mostrarModalb(false);
		} else {
			mostrarModalb(true);
		}
	};

	//ESTADOS LOCALES
	const [ isActive, setisActive ] = useState(false);

	return (
		<nav className="navbar is-dark" role="navigation" aria-label="main navigation">
			{modal ? <Login toggle={toggle} modal={modal} /> : null}
			{modalb ? <Signup toggleb={toggleb} modalb={modalb} /> : null}

			<div className="navbar-brand">
				<Link className="navbar-item" to="/">
					<span className="title is-2 has-text-white">
						SHOTAPP <i className="fas fa-basketball-ball" />
					</span>
				</Link>
				<Link
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
				</Link>
			</div>
			<div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
				<div className="navbar-start">
					<Link className="navbar-item">Home</Link>
					<Link className="navbar-item">Resultados</Link>
				</div>
				{sesion ? (
					<div className="navbar-end">
						<Link className="navbar-item">
							<span>
								CERRAR SESION <i className="fas fa-user-plus" />
							</span>
						</Link>
					</div>
				) : (
					<div className="navbar-end">
						<Link className="navbar-item" onClick={toggleb}>
							<span>
								CREA USUARIO <i className="fas fa-user-plus" />
							</span>
						</Link>
						<Link className="navbar-item" onClick={toggle}>
							<span>
								INICIAR SESION <i className="fas fa-sign-in-alt" />
							</span>
						</Link>
					</div>
				)}
			</div>
		</nav>
	);
};
export default HeaderSesion;
