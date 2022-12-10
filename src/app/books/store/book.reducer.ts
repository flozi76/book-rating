import { Action, createReducer, on } from '@ngrx/store';
import * as BookActions from './book.actions';
import { Book } from '../shared/book';

export const bookFeatureKey = 'book';

export interface State {
  books: Book[];
  loading: boolean;
}

export const initialState: State = {
  books: [],
  loading: false,
};

export const reducer = createReducer(
  initialState,

  on(BookActions.loadBooks, state => {
    return { ...state, loading: true };
    // return state;
  }),
  on(BookActions.loadBooksSuccess, (state, action) => {
    return {
      ...state,
      loading: false,
      books: action.data
    };
  }),
  on(BookActions.loadBooksFailure, (state, action) => {
    return {...state, loading: false};
  })
);
