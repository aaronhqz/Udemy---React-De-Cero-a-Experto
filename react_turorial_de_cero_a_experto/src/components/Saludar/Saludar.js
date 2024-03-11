import React from 'react';

// import './Saludar.css';
import './Saludar.scss';

export default function Saludar(props) {
	const { nombre, apellidos } = props;

	return (
		<div className='Saludar'>
			<p className='nombre'>
				Hola {nombre} {apellidos}. Como estas?
			</p>
			<p className='Creditos'>Créditos ...</p>
		</div>
	);
}
