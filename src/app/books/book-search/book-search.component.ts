import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounce, debounceTime, distinctUntilChanged, filter, Observable, switchMap } from 'rxjs';
import { Book } from '../shared/book';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent {

  searchControl = new FormControl('', { nonNullable: true });

  result$? : Observable<Book[]>;

  constructor(private bs: BookStoreService){

    this.result$ = this.searchControl.valueChanges.pipe(
      debounceTime(200),
      filter(e => e.length >= 3),
      distinctUntilChanged(),
      switchMap(text => this.bs.search(text))
    );
  }
}
