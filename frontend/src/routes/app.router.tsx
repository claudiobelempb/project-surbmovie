import React, { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const HomePage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ '../pages/HomePage'
  );
});

const FilmReview = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "Home Page" */ '../pages/FilmReview'
  );
});

const NotFoundPage = lazy(() => {
  return import(
    /* webpackPrefetch: true */
    /* webpackChunkname: "NotFound Page" */ '../pages/NotFoundPage'
  );
});

export const Routes: React.FC = () => {
  return useRoutes([
    { path: '/', element: <HomePage /> },
    { path: '/review/:movieId', element: <FilmReview /> },
    {
      path: '*',
      element: <NotFoundPage />
    }
  ]);
};
