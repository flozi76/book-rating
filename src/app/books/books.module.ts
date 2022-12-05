import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRatingComponent } from './book-rating/book-rating.component';
import { BookRatingStandaloneComponent } from '../components/book-rating-standalone/book-rating-standalone.component';
import { BookRatingUpperCompletePipe } from './pipes/book-rating-upper-complete.pipe';
import { BookRatingLowerCompletePipe } from './pipes/book-rating-lower-complete.pipe';
import { BookDetailsComponent } from './book-details/book-details.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BookDeleteConfirmationDialogComponent } from './dialogs/book-delete-confirmation-dialog/book-delete-confirmation-dialog.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRatingComponent,
    BookRatingUpperCompletePipe,
    BookRatingLowerCompletePipe,
    BookDetailsComponent,
    BookDeleteConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookRatingStandaloneComponent,
    MatDialogModule
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
