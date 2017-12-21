import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {PackagesModule} from '../packages/packages.component.module';
import {ApplicationModule} from '../application/application.module';

import { DependencyComponent } from './dependency-editor.component';
import { PackagesComponent } from 'app/packages/packages.component';
import {ChartModule} from '../utils/chart/chart.module' ;

@NgModule ({
    imports: [
        CommonModule,
        PackagesModule,
        ApplicationModule,
        ChartModule
    ],
    declarations: [
        DependencyComponent
    ],
    exports: [
        DependencyComponent,
        PackagesModule,
        ApplicationModule
    ]
})

export class DependencyModule {}
