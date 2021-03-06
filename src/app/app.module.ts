import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { 
  AppComponent,
  LoginComponent,
  HomeComponent,
  AdminComponent,
  StudentComponent 
} from './_components/index';
import { AuthGuard } from './_guards/index';
import { 
  AuthenticationService,
  VocabService,
  AlertService
} from './_services/index';
import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AuthenticationService,
    VocabService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
