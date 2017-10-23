import { BandService } from './shared/band.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BandFormComponent } from './band-form/band-form.component';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { BandListComponent } from './band-list/band-list.component';
import { BandRoutes } from './shared/band.routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BandRoutes
  ],
  declarations: [
    BandListComponent,
    BandDetailComponent,
    BandFormComponent
  ],
  providers: [BandService],
})
export class BandModule { }