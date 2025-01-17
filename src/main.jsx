import {createRouter, RouterProvider} from '@tanstack/react-router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {routeTree} from './routeTree.gen';

const router = createRouter({
	routeTree,
	context: {authentication: undefined},
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
