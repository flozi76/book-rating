import { TestBed } from '@angular/core/testing';
import { Book } from './book';

import { BookRatingService } from './book-rating.service';
import { RatingState } from './rating-state-enum';

describe('BookRatingService', () => {
  let service: BookRatingService;
  let book: Book;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookRatingService);

    // Arrange
    book = {
      isbn: '',
      title: '',
      description: '',
      rating: 3,
      price: 99.5
    }
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should increase rating by one', () => {

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(4);
  });

  it('should decrease rating by one', () => {
    // Act
    const ratedBook = service.rateDown(book);

    // Assert
    expect(ratedBook.rating).toBe(2);
  });

  it('should not rate lower than 1', () => {
    // Arrange
    book.rating = 1;

    // Act
    const ratedBook = service.rateDown(book);

    // Assert
    expect(ratedBook.rating).toBe(1);
  });

  it('should not rate higher than 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const ratedBook = service.rateUp(book);

    // Assert
    expect(ratedBook.rating).toBe(5);
  });

  it('should determine upper rating complete when rating is 5', () => {
    // Arrange
    book.rating = 5;

    // Act
    const rating = service.determineRatingState(book);

    // Assert
    expect(rating).toBe(RatingState.MaxRatingReached);
  });

  it('should determine lower rating complete when rating is 1', () => {
    // Arrange
    book.rating = 1;

    // Act
    const rating = service.determineRatingState(book);

    // Assert
    expect(rating).toBe(RatingState.MinRatingReached);
  });

  it('should determine lower rating undefined when rating is >1 <5', () => {
    // Arrange
    book.rating = 3;

    // Act
    const rating = service.determineRatingState(book);

    // Assert
    expect(rating).toBe(undefined);
  });
});
