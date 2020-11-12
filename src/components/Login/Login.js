import React, { useState } from 'react';



const Login = ({}) => {
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
		<section className="section">
			<form className="columns is-mobile">
				<div className="column is-9-mobile is-offset-1-mobile is-7-tablet is-offset-2-tablet is-4-desktop is-offset-4-desktop">
					<div className="field">
						<label className="label">Email</label>
						<div className="control">
							<input
								className="input"
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
								className="input"
								type="password"
								placeholder="Ingresa una contraseña"
								onChange={handleChange}
								name="contraseña"
							/>
						</div>
					</div>

					<div className="field is-grouped is-grouped-centered">
						<div className="control ">
							<button type="submit" className="button is-small is-dark">
								INICIAR SESION
							</button>
						</div>
					</div>
				</div>
			</form>
		</section>
	);
};

export default Login;
