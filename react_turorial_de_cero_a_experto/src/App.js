import logo from './logo.svg';
import './App.css';

// para importar componentes que no se exportan por defecto se utilizan llaves para llamar al componente.
//Para llamar varias funciones el un mismo componente, se utilizan ","
//Ejemplo de importación multiple: import HolaMundo, { AdiosMundo } from './components/HolaMundo';
import HolaMundo from './components/HolaMundo';
import AdiosMundo from './components/AdiosMundo';

import Saludar from './components/Saludar';

function App() {
	const userName = 'Aarcadio';
	const edad = '30';

	// construcción de objecto, estructura similar a JSON.
	const user = {
		nombre: 'Aaron Henríquez',
		edad: 26,
		colorFavorito: 'Verde',
	};

	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				{/* Una vez creado los componentes. Se pueden agregar al DOM llamando al componente por su nombre.
				 * Para reducir la cantidad de código, se usa la etiqueta de cierre al final. < />
				 */}
				{/* <HolaMundo />
				<AdiosMundo /> */}
				{/* Al momento de llamar un componente sin propiedad, se puede agregar usando PropName=PropInformation.
				En caso de multiples propiedades, se agregan al mismo componente.*/}
				{/* <Saludar name='Aarcadio' edad='30' /> */}

				{/* Nuevamente para utilizar una variable, se llama mediante llaves. */}
				<Saludar name={userName} edad={edad} />
			</header>
		</div>
	);
}

export default App;
