import { Routes } from '@angular/router';
import { DefaultIndexLayout } from './components/default-index-layout/default-index-layout';
import { App } from './app';
import { authGuard } from './core/auth/guard/auth-guard';
import { DefaultCadasterLayout } from './components/default-cadaster-layout/default-cadaster-layout';
import { DefaultLoginLayout } from './components/default-login-layout/default-login-layout';
import { Login } from './pages/login/login';
import { Cadaster } from './pages/cadaster/cadaster';

export const routes: Routes = [
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'cadaster',
    component: Cadaster,
  },
  {
    path: 'app',
    component: App,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'index',
        component: DefaultIndexLayout
      },
      // Adicione outras rotas protegidas aqui
      // { path: 'profile', component: ProfileComponent },
      // { path: 'settings', component: SettingsComponent },
    ],
  },
  // Rota padrão - redireciona para login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  // Rota curinga - redireciona para login
  {
    path: '**',
    redirectTo: 'login'
  },
];
