import logo from './logo.svg';
import './App.css';
import Formulario from './components/Formulario/Formulario';
import Saludar from './components/Saludar/Saludar';
import LayoutBasic from './components/LayoutBasic';

function App() {
	const data = {
		nombre: 'Aarcadio',
		apellidos: 'Twitch.tv',
		edad: 30,
		ciudad: 'Heredia',
	};

	return (
		<div className='App'>
			{/* <img src={logo} className='App-logo' alt='logo' /> */}
			{/* <h1>Formulario</h1> */}
			<LayoutBasic>
				<h1>Nuestra App Web</h1>
				<Saludar data={data} />
			</LayoutBasic>
		</div>
	);
}

export default App;
