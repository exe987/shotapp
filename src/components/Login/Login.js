import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UsuarioContext from '../../context/usuario/usuarioContext';
import Swal from 'sweetalert2';

const Login = ({ toggle, modal }) => {
	const UsuariosdeContext = useContext(UsuarioContext);
	const { iniciarSesion, sesion } = UsuariosdeContext;

	const history = useHistory();

	//STATE PARA DATOS INGRESADOS POR EL USUARIO
	const [ datos, datosIngresados ] = useState({
		email: '',
		password: ''
	});

	//FUNCION QUE COLOCA LOS ELEMENTOS EN EL STATE
	const handleChange = (e) => {
		//ACTUALIZA EL STATE
		datosIngresados({
			...datos,
			[e.target.name]: e.target.value
		});
	};
	//EXTRAEMOS LOS VALORES DE LOS DATOS INGRESADOS
	const { email, password } = datos;

	const handleSubmit = (e) => {
		e.preventDefault();
		if (email.trim() === '' || password.trim() === '') {
			Swal.fire({
				icon: 'error',
				text: 'Completa los campos correctamente!!'
			});
			return;
		} else {
			iniciarSesion(datos);
			toggle();
			history.push('/dashboard');
		}
	};

	return (
		<section className={`modal ${modal ? `is-active` : null}`}>
			<div className="modal-background" />
			<div className="modal-content has-background-white columns is-mobile">
				<form className="column is-10-mobile is-10-desktop p-5 " onSubmit={handleSubmit}>
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								className="input is-small"
								type="email"
								placeholder="Ingresa tu e-mail"
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
								className="input is-small"
								type="password"
								placeholder="Ingresa una contraseña"
								onChange={handleChange}
								name="password"
								value={password}
							/>
						</div>
					</div>
					<div className="field is-grouped is-grouped-centered">
						<div className="control ">
							<button type="submit" className="button is-small">
								INICIAR SESION
							</button>
						</div>
					</div>
				</form>
			</div>
			<button className="modal-close is-large" aria-label="close" onClick={toggle} />
		</section>
	);
};

export default Login;
