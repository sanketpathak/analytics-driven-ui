import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { PackagesModule } from './packages/packages.component.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';


@NgModule({
    declarations: [
        AppComponent,
        ApplicationComponent,
    ],
    imports: [
        BrowserModule,
        PackagesModule,
        HttpModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
