import { SignupComponent } from './auth/signup/signup.component';
import { ModalComponent } from './modal/modal.component';
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
        path: 'modal',
        component: ModalComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'band',
        loadChildren: 'app/band/band.module#BandModule',
      }
    ]
  }
];

export const AppRoutes : ModuleWithProviders = RouterModule.forRoot(routes);
