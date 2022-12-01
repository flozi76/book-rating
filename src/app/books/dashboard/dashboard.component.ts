import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = []; // cannot be undefined. Initialized here or in constructor.
  books2?: Book[]; // allow undefined;

  constructor(){

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
    console.log('UP', book);
  }
  doRateDown(book: Book){
    console.log('DOWN', book);
  }

}
