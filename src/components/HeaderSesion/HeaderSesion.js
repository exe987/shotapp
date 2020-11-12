import React, { useState } from 'react';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const HeaderSesion = () => {
	return (
		<section className="section shade">
			<div className="container">
				<div className="columns is-mobile is-vcentered">
					<div className="column is-6-mobile is-7-tablet">
						<figure className="image is-96x96">
							<a>
								<img src="https://i.pinimg.com/originals/70/d8/e2/70d8e2905ff447ab7138ca2dbd628119.png" />
							</a>
						</figure>
					</div>
					<div className="column is-4-mobile is-5-tablet ">
						<div className="columns">
							<a className="is-6 button is-danger is-small m-1">
								<span className="icon">
									<i className="fas fa-user-plus" />
								</span>
								<span>CREAR USUARIO</span>
							</a>
							<a className="is-6 button is-dark is-small m-1">
								<span className="icon">
									<i className="fas fa-sign-in-alt" />
								</span>
								<span>INICIAR SESION</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeaderSesion;
