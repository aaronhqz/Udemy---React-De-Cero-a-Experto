import React from 'react';
import Formulario from './Formulario/Formulario';

export default function LayoutBasic(props) {
	// Deconstruccion de un child component.
	const { children } = props;

	return (
		<div>
			<header>Menu Top</header>
			<div> {children} </div>
			<footer>Derechos de Autor</footer>
		</div>
	);
}
