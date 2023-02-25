import React, { lazy, LazyExoticComponent } from 'react';

const MainPage = lazy(() => import('../pages/home/Home'));

export interface IRoute {
  path: string;
  exact?: boolean;
  component: LazyExoticComponent<any> | React.FC;
  getPath: (param?: string | number) => string;
}

export const MainRoute: IRoute = {
  path: '/',
  getPath: () => '/',
  exact: true,
  component: MainPage,
};

export const AboutRoute: IRoute = {
  path: '/about',
  getPath: () => '/about',
  exact: true,
  component: MainPage,
};

export const ProjectsRoute: IRoute = {
  path: '/projects',
  getPath: () => `/projects`,
  exact: true,
  component: MainPage,
};

export const ContactRoute: IRoute = {
  path: '/contact',
  getPath: () => '/contact',
  exact: true,
  component: MainPage,
};