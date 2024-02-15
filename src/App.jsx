import React from 'react';
import Header from './components/Header';
import './App.css';
import Hero from './components/Hero';
import Footer from './components/Footer';

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
	return (
		<>
			<Header />
			<Hero />
			<Footer />
		</>
	);
}
export default App;
