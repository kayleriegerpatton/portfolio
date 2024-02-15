import React from 'react';
import Header from './components/Header';
import './App.css';

// TODO: change window location to hash
function locationHashChanged() {
	const hashId = window.location.hash;
	console.log(`Change window location to: ${hashId}`);

	// ! cant get elementById with react
	// const element = document.getElementById(hashId);
	// console.log(element);
	// element.scrollIntoView({
	// 	behavior: 'smooth',
	// 	block: 'start',
	// 	inline: 'nearest',
	// });
}

window.onhashchange = locationHashChanged;

function App() {
	return <Header />;
}
export default App;
