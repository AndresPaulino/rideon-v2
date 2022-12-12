import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import pagesRoutes from './pages/routes';

const Routes = () => {
  return (
    <ReactRoutes>
      {pagesRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.renderer()} />
      ))}
    </ReactRoutes>
  );
};

export default Routes;
