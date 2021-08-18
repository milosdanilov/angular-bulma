import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ColumnsModule } from 'angular-bulma/columns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ColumnsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
