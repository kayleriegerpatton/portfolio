import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	//! when running locally, need to remove basename prop
	<BrowserRouter basename="/portfolio/" future={{ v7_startTransition: true }}>
		<App />
	</BrowserRouter>
);
