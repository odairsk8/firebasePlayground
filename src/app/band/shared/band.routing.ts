import { Routes, RouterModule } from '@angular/router';
import { BandListComponent } from './../band-list/band-list.component';
import { BandDetailComponent } from './../band-detail/band-detail.component';

const routes: Routes = [
  {
    path: '',
    data: {pageTitle: 'Bags List'},
    component: BandListComponent
  },
  {  
    path: "new", 
    component : BandDetailComponent,
    data: {pageTitle: 'New Band', formMode: 'new' }, 
  },
  {  
    path: 'edit/:id',
    component : BandDetailComponent,
    data: {pageTitle: 'Editing Band', formMode: 'edit' }, 
  },
];

export const BandRoutes = RouterModule.forChild(routes);
