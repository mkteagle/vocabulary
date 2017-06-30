import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, LoginComponent, HomeComponent, AdminComponent, NameComponent } from './_components/index';
import { AuthGuard } from './_guards/index';
import { AuthenticationService, VocabService } from './_services/index';
import { AppConfig } from './app.config';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminComponent,
    NameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [AppConfig, AuthGuard, AuthenticationService, VocabService],
  bootstrap: [AppComponent]
})
export class AppModule { }
