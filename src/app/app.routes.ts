import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { DefaultIndexLayout } from './components/default-index-layout/default-index-layout';
import { Cadaster } from './pages/cadaster/cadaster';
import { App } from './app';
import { authGuard } from './core/auth/guard/auth-guard';

export const routes: Routes = [
  // Rota de login e cadastro (área pública)
  {
    path: '', // Rota raiz
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: Login },
      { path: 'cadaster', component: Cadaster },
    ],
  },
  // Rota principal (área protegida)
  {
    path: '',
    component: App,
    children: [{ path: 'index', component: DefaultIndexLayout }],
    canActivate: [authGuard],
  },
];
