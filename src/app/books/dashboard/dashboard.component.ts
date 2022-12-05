import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { RatingState } from '../shared/rating-state-enum';
import { MatDialog } from '@angular/material/dialog';
import { BookDeleteConfirmationDialogComponent } from '../dialogs/book-delete-confirmation-dialog/book-delete-confirmation-dialog.component';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  books: Book[] = []; // cannot be undefined. Initialized here or in constructor.
  books2?: Book[]; // allow undefined;

  // wenn man den mit private dekoriert wird es automatisch als property in der klasse sichtbar
  constructor(private ratingService: BookRatingService, private bookStoreService: BookStoreService, private dialog: MatDialog) {

    // this.books = [
    //   { isbn: '1234', title: 'Angular', rating: 5, price: 33.9, description: 'Angular Book description...' },
    //   { isbn: '7895', title: 'Rust', rating: 2, price: 77.6, description: 'Some rusty stuff' },
    //   { isbn: '7898', title: 'Coding C#', rating: 4, price: 66.5, description: 'C# bla bla' }
    // ];
    this.loadBookList();
  }

  loadBookList() {
    this.bookStoreService.getAll().subscribe(books => {
      // Errorhandling über next { ... }
      this.books = books;
    });
  }

  getBookCount(): number {
    return this.books.length;
  }

  doRateUp(book: Book) {
    const ratedBook = this.ratingService.rateUp(book);
    this.updateList(ratedBook);
    console.log('UP', book);

  }

  doRateDown(book: Book) {
    const ratedDown = this.ratingService.rateDown(book);
    this.updateList(ratedDown);
    console.log('DOWN', book);
    // var, let, const
  }

  doDeleteBook(book: Book) {
    console.log("deleting book...", book);
    const isbn: String = book.isbn;
    const enterAnimationDuration = '500ms'
    const dialogRef = this.dialog.open(BookDeleteConfirmationDialogComponent, {
      data: book,
      width: '500px',
      enterAnimationDuration
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.bookStoreService.deleteBook(isbn).subscribe(response => {
          console.log("book delete response: ", response);
          this.loadBookList();
        });
      }
    });
  }

  doResetBookList() {
    this.bookStoreService.resetBookList().subscribe(response => {
      console.log("reset book list response: ", response);
      this.loadBookList();
    })
  }

  getRatingState(book: Book): RatingState | undefined {
    return this.ratingService.determineRatingState(book);
  }

  private updateList(ratedBook: Book) {

    this.books = this.books.map(book => {
      if (book.isbn === ratedBook.isbn) {
        return ratedBook;
      }
      else {
        return book;
      }
    });
  }

}
