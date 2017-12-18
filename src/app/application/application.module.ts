import { NgModule } from '@angular/core';


import { ApplicationComponent } from './application.component';
import {ChartModule} from '../utils/chart/chart.module' ;


@NgModule({
 imports: [
    ChartModule
],
 declarations: [
  ApplicationComponent
],
 exports: [
  ApplicationComponent
],
 providers: [],
})
export class ApplicationModule { }
