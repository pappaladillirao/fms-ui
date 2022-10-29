import { Routes } from '@angular/router';
import { LoginComponent } from './login.component';

export const LOGIN_ROUTE: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      authorities: [],
      pageTitle: 'login.title',
    },
  },
];
