import { Routes } from '@angular/router';
import { Default } from './components/default/default';
import { AuthGuard } from './services/auth-guard';

export const routes: Routes = [
  { path: "", redirectTo: "/personal/profile/me/default", pathMatch: "full" },
  { path: "dashboard", canActivate:[AuthGuard], component: Default },
  {
    path: '',
    loadComponent: () =>
      import('./app').then(m => m.App),
    children: [
      { path: '', redirectTo: 'm', pathMatch: 'full' },
      {
        path: 'm',
        loadChildren: () =>
          import('./components/tutorials/tutorials.routes')
            .then(m => m.TUTORIAL_ROUTES),
             canActivate:[AuthGuard],
      },
      {
        path: 'personal',
        loadChildren: () =>
          import('./components/personal/personal.routes')
            .then(m => m.PERSONAL_ROUTES),           
      },
      {
        path: 'm',
        loadChildren: () =>
          import('./components/speaking-eng/english.routes')
            .then(m => m.ENGLISH_ROUTES),
             canActivate:[AuthGuard],
      },
      {
        path: 'm',
        loadChildren: () =>
          import('./components/finance/finance.routes')
            .then(m => m.FINANCE_ROUTES),
             canActivate:[AuthGuard],
      }
    ]
  }

];
