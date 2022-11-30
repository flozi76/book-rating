import { Component, Input } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent {
  // Daten dürfen von Elternkomponente in diese Property hinenfliessen.
  @Input() book?: Book;
  @Input() foo?: string;
  @Input() index?: number;
}
