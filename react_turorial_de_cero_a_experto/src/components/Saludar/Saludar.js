import React from 'react';
import PropTypes from 'prop-types';

// import './Saludar.css';
import './Saludar.scss';

export default function Saludar(props) {
	//doble deconstruccion agregando los valores del objecto dentro de props
	const {
		data: { nombre, apellidos, edad, ciudad },
	} = props;

	console.log(ciudad);

	return (
		<div className='Saludar'>
			<p className='nombre'>
				Hola {nombre} {apellidos}. Como estas?
			</p>
			<p className='creditos'>Creditos . . .</p>
		</div>
	);
}

// Asigna el typo de las propiedades de las variables.
// Saludar.propTypes = {
// 	nombre: PropTypes.string.isRequired,
// 	apellidos: PropTypes.string.isRequired,
// };
