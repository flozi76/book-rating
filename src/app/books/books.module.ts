import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookComponent } from './book/book.component';
import { BookRaitingComponent } from './book-raiting/book-raiting.component';


@NgModule({
  declarations: [
    DashboardComponent,
    BookComponent,
    BookRaitingComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  exports: [DashboardComponent]
})
export class BooksModule { }
