import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { BooksModule } from './books/books.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // BooksModule, Für Lazy Loading auskommentiert
    HttpClientModule,
    BrowserAnimationsModule, // == provideHttpClient()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
