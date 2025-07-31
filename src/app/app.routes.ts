import { Routes } from '@angular/router';
import { DefaultLoginLayout } from './components/default-login-layout/default-login-layout';
import { Login } from './pages/login/login';
import { DefaultIndexLayout } from './components/default-index-layout/default-index-layout';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'index',
    component: DefaultIndexLayout,
  },
];
