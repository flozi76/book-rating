import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  constructor() { }

  rateUp(book: Book): Book {
    // do not, it is a reference and we do not konw
    //book.rating++;

    return {
      ...book,
      // rating: book.rating >= 5 ? 5 : book.rating + 1
      rating: Math.min(5, book.rating + 1)
    };
  }

  rateDown(book: Book): Book {
    // variante early exit
    if(book.rating <= 1){
      return book;
    }

    return {
      ...book,
      rating: book.rating - 1}
  }

}
