import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookRatingStandaloneComponent } from '../components/book-rating-standalone/book-rating-standalone.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRatingComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookRatingStandaloneComponent,
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
