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
      {isbn: '1234', title: 'Angular', rating: 5, price: 33.9, description: 'Some dingda'},
      {isbn: '7895', title: 'Rust', rating: 2, price: 77.6, description: 'Some rusty stuff'}
    ];
  }

  getBookCount(): number {
    return this.books.length;
  }

}
