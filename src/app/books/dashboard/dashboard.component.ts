import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = []; // cannot be undefined. Initialized here or in constructor.
  books2?: Book[]; // allow undefined;

  // wenn man den mit private dekoriert wird es automatisch als property in der klasse sichtbar
  constructor(private ratingService: BookRatingService){

    this.books = [
      {isbn: '1234', title: 'Angular', rating: 5, price: 33.9, description: 'Angular Book description...'},
      {isbn: '7895', title: 'Rust', rating: 2, price: 77.6, description: 'Some rusty stuff'},
      {isbn: '7898', title: 'Coding C#', rating: 4, price: 66.5, description: 'C# bla bla'}
    ];
  }

  getBookCount(): number {
    return this.books.length;
  }

  doRateUp(book: Book){
    const ratedBook = this.ratingService.rateUp(book);
    this.updateList(ratedBook);
    console.log('UP', book);

  }
  doRateDown(book: Book){
    const ratedDown = this.ratingService.rateDown(book);
    this.updateList(ratedDown);
    console.log('DOWN', book);
    // var, let, const
  }

  private updateList(ratedBook : Book){

    this.books = this.books.map(book => {
      if(book.isbn === ratedBook.isbn ){
        return ratedBook;
      }
      else{
        return book;
      }
    });
  }

}
