import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
import App from './App';

render(
	<HashRouter basename="/">
		<App />
	</HashRouter>,
	document.getElementById('root')
);

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
	window.addEventListener('load', () => {
		navigator.serviceWorker
			.register('/service-worker.js')
			.then(reg => console.log('Service Worker registered, scope:', reg.scope))
			.catch(err => console.error('Service Worker registration failed:', err));
	});
}
