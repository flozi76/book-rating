import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fromEvent, map, Observable } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {

  book?: Book

  resizeWindow$?: Observable<number>;

  constructor(private route: ActivatedRoute, private bookStoreService: BookStoreService) {

    // Synchroner Weg / PULL
    const isbn = this.route.snapshot.paramMap.get('isbn'); // weil routing -> path 'books/:isbn'

    const windowEvents$ = fromEvent(window, 'resize');
    this.resizeWindow$ = windowEvents$.pipe(
      map(e => {
        console.log(`resizing: ${window.innerWidth}`);
        return window.innerWidth;
      })
    );

    // Asynchroner Weg / PUSH
    this.route.paramMap.subscribe(params => {
      const isbn = params.get('isbn')!;
      console.log(isbn);

      const bookObservable = this.bookStoreService.getSingle(isbn);
      bookObservable.subscribe(book => {

        this.book = book;
      });
    });
  }
}
