import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Car() {
	//useState snipped inicia el codigo con el primer estado y estable la segunda parte, la funcion.
	/* Sintaxis de un useState:
	 * nombreDelEstado: Etapa inicial
	 * nombreDelEstadoDespuesDelCambio
	 * useState(valorInicialDelEstado) */
	// const [started, setStarted] = useState(false);
	// const [countKm, setcountKm] = useState(0);

	//object useState:
	// A diferencia de los estados anteriores, este es un objecto.
	const [carState, setCarState] = useState({
		started: false,
		countKm: 0,
	});

	useEffect(() => {
		document.title = `Coche ${carState.started}`;
	}, [carState]);

	/* Operación ternaria para reducir la cantidad de código.
     * 	const checkStateCar = () => {
		if (started) {
			return 'Encendido';
		} else {
			return 'Apagado';
		}
	}; */
	//Style function.
	const checkStateCar = () =>
		carState.started ? (
			<span style={{ color: 'green' }}>Encendido</span>
		) : (
			<span style={{ color: 'red' }}>Apagado</span>
		);

	const increaseKm = (numeroDeKm) => {
		if (carState.started) {
			setCarState({
				...carState,
				countKm: carState.countKm + numeroDeKm,
			});
		} else {
			alert('Vehículo se encuentra apagado');
		}
	};

	return (
		<div>
			<h2>Car Current State is: {checkStateCar()} </h2>
			<h2>Kilómetros recorridos: {carState.countKm} km </h2>
			{/* Los tres puntos (...) llama a todas las propiedades de todo el objecto /  componente.
						// De lo contrario se tendría que llamar ambos estados de manera manual. */}
			<button
				id='encender-motor'
				onClick={() => {
					setCarState({
						...carState,
						started: !carState.started,
					});
				}}
			>
				Encender / Apagar Vehículo
			</button>

			<button onClick={() => increaseKm(5)}>Incrementar km</button>
		</div>
	);
}
