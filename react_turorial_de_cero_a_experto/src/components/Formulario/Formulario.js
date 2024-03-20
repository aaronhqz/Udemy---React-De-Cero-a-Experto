import React from 'react';
import PropTypes from 'prop-types';

export default function Formulario() {
	return (
		<form>
			<FormInput
				title='Email'
				name='email'
				type='email'
				placeholder='Escribe tu correo electrónico'
			/>
			<br />
			<FormInput
				title='Contraseña'
				name='password'
				type='password'
				placeholder='Escribe tu contraseña'
			/>
			<br />
			<FormButtonSend />
		</form>
	);
}

function FormInput(props) {
	const { title, name, type, placeholder } = props;

	console.log(props);
	return (
		<div>
			<label>{title} </label>
			<input name={name} type={type} placeholder={placeholder} />
		</div>
	);
}

function FormButtonSend() {
	return <button type='submit'>Enviar</button>;
}
