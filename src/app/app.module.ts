import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AngularFireModule } from '@angular/fire/compat';

import { environment } from 'src/environments/environment';
import { FirebaseApp, FirebaseAppModule } from '@angular/fire/app';
import { initializeApp } from 'firebase/app';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore/';
import { VverifyComponent } from './vverify/vverify.component';
import { FormComponent } from './form/form.component';
import { WebcamModule } from 'ngx-webcam';
import { LogoComponent } from './logo/logo.component';
import {HttpClientModule} from '@angular/common/http';
import { GatepassdetailsComponent } from './gatepassdetails/gatepassdetails.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    VverifyComponent,
    FormComponent,
    LogoComponent,
    GatepassdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
