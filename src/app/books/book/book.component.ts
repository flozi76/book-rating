import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent  implements OnInit {
    // Daten dürfen von Elternkomponente in diese Property hinenfliessen.
  @Input() book?: Book;
  @Input() foo?: string;
  @Input() index?: number;

  @Output() rateUp = new EventEmitter<Book>();
  @Output() rateDown = new EventEmitter<Book>();

  doRateUp(){
    this.rateUp.emit(this.book)
  }

  doRateDown(){
    this.rateDown.emit(this.book)
  }

  // ----- testing stuff --------
  constructor(){
    console.log('CTOR', this.book)
  }

  ngOnChanges(changes: SimpleChanges){
    console.log('ONChange', this.book)
  }

  ngOnInit(): void {
    console.log('ONINIT', this.book)
  }
}
