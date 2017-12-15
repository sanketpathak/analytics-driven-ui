import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { PackagesComponent } from './packages/packages.component';


@NgModule({
  declarations: [
    AppComponent,
    ApplicationComponent,
    PackagesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
