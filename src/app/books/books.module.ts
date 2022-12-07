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
import { BookSearchComponent } from './book-search/book-search.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ValdemortModule } from 'ngx-valdemort';
import { StoreModule } from '@ngrx/store';
import * as fromBook from './store/book.reducer';
import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './store/book.effects';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRatingComponent,
    BookRatingUpperCompletePipe,
    BookRatingLowerCompletePipe,
    BookDetailsComponent,
    BookDeleteConfirmationDialogComponent,
    BookSearchComponent,
    BookCreateComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    BookRatingStandaloneComponent,
    MatDialogModule,
    ReactiveFormsModule,
    ValdemortModule,
    StoreModule.forFeature(fromBook.bookFeatureKey, fromBook.reducer),
    EffectsModule.forFeature([BookEffects])
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
