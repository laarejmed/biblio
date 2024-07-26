import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChafafLibraryModule } from 'chafaf-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChafafLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
