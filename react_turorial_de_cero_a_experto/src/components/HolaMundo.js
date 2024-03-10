//Componentes siempre empiezan con mayúsculas. Regla de React.
import React from 'react'; // Importación para iniciar react.

// Función vacía. Primer componente.
// Existen dos maneras de exportar el componente. Se puede ser hacer de forma directa como se puede ver a continuación o al final del método.
// Solo puede existir un "export default" por componente.
// default es el componente que sera invocado por defecto en otra parte de la aplicación.
export default function HolaMundo() {
	const miFuncion = () => {
		console.log('Mi Primera Función ');
	};
	// El return se utiliza para regresar aquello que entra en la función del componente.
	return (
		// El return solo puede regresar un solo objeto.
		<div>
			<h1>Hola Mundo</h1>
			<h2>Aarcadio in the house!</h2>
		</div>
	);
}

// La función puede ser exportada al final o al inicio de la función.
/* export function AdiosMundo() {
	return (
		<div>
			<h1>Adios Mundo Cruel!</h1>
		</div>
	);
} */

//Ejemplo de exportación al final del función:
// export default HolaMundo;
// Se exporta el nombre la función.

//
