import React, { useState, useContext } from 'react';
import UsuarioContext from '../../context/usuario/usuarioContext';
import Error from '../Error/Error';
import Exito from '../Exito/Exito';
import PropTypes from 'prop-types';

//STYLED COMPONENTS

const Signup = () => {
	const UsuariosdeContext = useContext(UsuarioContext);
	const { creaUsuario } = UsuariosdeContext;

	//STATE PARA EL OBJETO DE PROFESOR
	const [ profesor, guardarProfesor ] = useState({
		nombre: '',
		contraseña: '',
		email: ''
	});

	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleChange = (e) => {
		//ACTUALIZA EL STATE
		guardarProfesor({
			...profesor,
			[e.target.name]: e.target.value
		});
	};
	//EXTRAEMOS LOS VALORES DE PROFESOR
	const { nombre, contraseña, email } = profesor;

	//SUBMIT DEL FORMULARIO CON LOS DATOS
	const handleSubmit = (e) => {
		//PARA QUE NO SE RECARGUE LA PAGINA
		e.preventDefault();	
		//VALIDACION
		if (nombre.trim() === '' || contraseña.trim() === '' || email.trim() === '') {
			return;
		} else {
			//GUARDAR USUARIOS EN LOCAL STORAGE
			setTimeout(() => {
				creaUsuario(profesor);
			}, 3000);
		}
	};

	return (
		<section className="section">
			<form className="columns is-mobile" onSubmit={handleSubmit}>
				<div className="column is-9-mobile is-offset-1-mobile is-7-tablet is-offset-2-tablet is-4-desktop is-offset-4-desktop">
					<div className="field">
						<label className="label">Nombre</label>
						<div className="control">
							<input
								className="input"
								type="text"
								placeholder="Ingresa tu nombre"
								onChange={handleChange}
								name="nombre"
								value={nombre}
							/>
						</div>
					</div>
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								className="input"
								type="email"
								placeholder="Ingresa un e-mail"
								onChange={handleChange}
								name="email"
								value={email}
							/>
						</div>
					</div>

					<div className="field">
						<label className="label">Contraseña</label>
						<div className="control">
							<input
								className="input"
								type="password"
								placeholder="Ingresa una contraseña"
								onChange={handleChange}
								name="contraseña"
								value={contraseña}
							/>
						</div>
					</div>

					<div className="field is-grouped is-grouped-centered">
						<div className="control ">
							<button type="submit" className="button is-small is-dark">
								CREA USUARIO
							</button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Signup;
