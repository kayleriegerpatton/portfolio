import React from 'react';
import { createRoot } from 'react-dom/client';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './App.jsx';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);

/* root.render(<RouterProvider router={router} />) */
