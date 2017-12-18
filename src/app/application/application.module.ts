import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { ApplicationComponent } from './application.component';
import {ChartModule} from '../utils/chart/chart.module' ;


@NgModule({
 imports: [
    ChartModule
],
 declarations: [
  ApplicationComponent,
  BrowserModule
],
 exports: [
  ApplicationComponent
],
 providers: [],
})
export class AppModule { }
