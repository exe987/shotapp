import React, { useState, useContext } from 'react';
import UsuarioContext from '../../context/usuario/usuarioContext';
import Swal from 'sweetalert2';
import uuid from 'uuid/dist/v4';

const Signup = ({ toggleb, modalb }) => {
	const UsuariosdeContext = useContext(UsuarioContext);
	const { creaUsuario, error, cargando } = UsuariosdeContext;

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
			Swal.fire({
				icon: 'error',
				text: 'Completa los campos correctamente!!'
			});
			return;
		} else {
			profesor.id = uuid();
			creaUsuario(profesor);
			//CERRAR EL MODAL
		    toggleb()
		}
	};

	return (
		<section className={`modal ${modalb ? `is-active` : null}`}>
			<div className="modal-background" />
			<div className="modal-content has-background-white columns is-mobile">
				<form className="column is-10-mobile is-10-desktop p-5" onSubmit={handleSubmit}>
					<div className="column">
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
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={toggleb} />
		</section>
	);
};

export default Signup;
