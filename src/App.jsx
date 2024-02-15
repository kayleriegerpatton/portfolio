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

// function ScrollToAnchor() {
//   const location = useLocation();
//   const lastHash = React.useRef('');

//   // listen to location change using useEffect with location as dependency
//   useEffect(() => {
//     if (location.hash) {
//       lastHash.current = location.hash.slice(1); // safe hash for further use after navigation
//     }

//     if (lastHash.current && document.getElementById(lastHash.current)) {
//       setTimeout(() => {
//         document
//           .getElementById(lastHash.current)
//           ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//         lastHash.current = '';
//       }, 100);
//     }
//   }, [location]);

//   return null;
// }

function App() {
	return <Header />;
}
export default App;
