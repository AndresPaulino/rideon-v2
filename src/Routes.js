import React from 'react';
import { Routes as ReactRoutes, Route, Navigate } from 'react-router-dom';
import Page from './components/Page';
import pagesRoutes from './pages/routes';

const Routes = () => {
  return (
    <ReactRoutes>
      {pagesRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.renderer()} />
      ))}
      <Route path='*' element={<Navigate replace to='/not-found-cover' />} />
    </ReactRoutes>
  );
};

export default Routes;
