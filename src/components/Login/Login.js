import React, { useState } from 'react';

const Login = ({ toggle, modal }) => {
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

	return (
		<section className={`modal ${modal ? `is-active` : null}`}>
			<div className="modal-background" />
			<div className="modal-content has-background-white columns">
				<form className="column p-5 ">
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								className="input is-small"
								type="email"
								placeholder="Ingresa tu e-mail"
								onChange={handleChange}
								name="email"
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
								name="contraseña"
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
