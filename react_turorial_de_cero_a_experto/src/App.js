import logo from './logo.svg';
import './App.css';

import Saludar from './components/Saludar/Saludar';

function App() {
	const enviarSaludo = (nombre) => {
		console.log(`Hola ${nombre}`);
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<h1>Mi primer component</h1>
				<h2 className='nombre'>Clases de Udemy</h2>
				<Saludar nombre='Aaron' apellidos='Henríquez' />
			</header>
		</div>
	);
}

export default App;
