import React from 'react';

export default function Saludar(props) {
	console.log(props);

	return (
		<div>
			<h2>
				{/* para usar una variable se usan llaves */}
				Hola {props.name}, tu edad es {props.edad}
			</h2>
		</div>
	);
}
