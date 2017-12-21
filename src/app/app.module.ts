import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {DependencyModule} from './dependency-editor/dependency-editor.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DependencyModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
