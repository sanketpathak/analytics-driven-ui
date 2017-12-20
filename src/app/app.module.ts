import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PackagesModule } from './packages/packages.component.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AccordionModule } from 'ngx-bootstrap';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        PackagesModule,
        HttpModule,
        HttpClientModule,
        AccordionModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
