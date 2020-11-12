import React from 'react';
import Usuarios from './context/usuario/usuarioState';
import Jugadores from './context/jugadores/jugadoresState';
import Index from './components/Index/Index';
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		
			<Usuarios>
				<Jugadores>
				<Dashboard/>
				</Jugadores>
		    </Usuarios>
	
	);
}
export default App;
