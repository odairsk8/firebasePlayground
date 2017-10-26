import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth/shared/auth.service';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './auth/signup/signup.component';
import { environment } from './../environments/environment';
import { BandModule } from './band/band.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalComponent } from './modal/modal.component';

import {NgModalModule} from "ng-modal";


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    SignupComponent
],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    
    NgModalModule,

    AppRoutes,
    BandModule
  ],
  providers: [AngularFireAuth,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
