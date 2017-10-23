import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/band',
        pathMatch: 'full',
      },
      {
        path: 'band',
        loadChildren: 'app/band/band.module#BandModule',
      }
    ]
  },
  
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes);
