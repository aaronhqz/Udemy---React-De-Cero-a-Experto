import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Car() {
	const [started, setStarted] = useState(false);

	useEffect(() => {
		document.title = `Coche ${started}`;
	}, [started]);

	const checkStateCar = () =>
		started ? (
			<span style={{ color: 'green' }}>Encendido</span>
		) : (
			<span style={{ color: 'red' }}>Apagado</span>
		);

	return (
		<div>
			<h1>Use Effect Tutorial</h1>
			<h2>Nuestro coche esta: {checkStateCar()} </h2>
			<button
				onClick={() => {
					setStarted(!started);
				}}
			>
				Encender / Apagar Motor
			</button>
		</div>
	);
}
