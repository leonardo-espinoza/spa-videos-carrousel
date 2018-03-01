import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './components/App';
import store from './configureStore'

/*
store.subscribe(() => {
	console.log("state luego de accion:")
	console.log(store.getState())
});
*/
const app = document.getElementById('app');
/*
ReactDOM.render(
	<Provider store={store}>
		<App/>
	</Provider>
	, app);
*/
ReactDOM.render(
	<App/>
	, app);
