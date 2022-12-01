import { Injectable } from '@angular/core';
import { Book } from './book';
import { RatingState } from './rating-state-enum';

@Injectable({
  providedIn: 'root'
})
export class BookRatingService {

  readonly MAX_RATING: number = 5;

  constructor() { }

  rateUp(book: Book): Book {
    // do not, it is a reference and we do not konw
    //book.rating++;

    return {
      ...book,
      // rating: book.rating >= 5 ? 5 : book.rating + 1
      rating: Math.min(this.MAX_RATING, book.rating + 1)
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

  determineRatingState(book: Book): RatingState | undefined{
    return book.rating <= 1 ? RatingState.MinRatingReached : book.rating >= this.MAX_RATING ? RatingState.MaxRatingReached : undefined;
  }
}
