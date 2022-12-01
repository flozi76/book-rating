import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookRatingStandaloneComponent } from '../components/book-rating-standalone/book-rating-standalone.component';
import { BookRatingUpperCompletePipe } from './pipes/book-rating-upper-complete.pipe';
import { BookRatingLowerCompletePipe } from './pipes/book-rating-lower-complete.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRatingComponent,
    BookRatingUpperCompletePipe,
    BookRatingLowerCompletePipe
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookRatingStandaloneComponent,
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
