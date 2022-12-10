import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as BookActions from './book.actions';
import { BookStoreService } from '../shared/book-store.service';


@Injectable()
export class BookEffects {

  loadBooks$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(BookActions.loadBooks),

      mergeMap(() => this.bs.getAll().pipe(
        map(books => BookActions.loadBooksSuccess({ data: books })),
        catchError(error => of(BookActions.loadBooksFailure({ error: error.message })))
      )),

      // concatMap(() =>
      //   /** An EMPTY observable only emits completion. Replace with your own observable API request */
      //   EMPTY.pipe(
      //     map(data => BookActions.loadBooksSuccess({ data })),
      //     catchError(error => of(BookActions.loadBooksFailure({ error }))))
      // )
    );
  });


  constructor(private actions$: Actions, private bs: BookStoreService) { }
}
