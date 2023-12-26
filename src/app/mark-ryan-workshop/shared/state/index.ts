import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule} from '@ngrx/store';
import * as fromBooks from './books.reducer';
import {NgModule} from '@angular/core';
import {calculateBooksGrossEarnings} from '../models';

const BOOKS_FEATURE = 'shared-books';

export interface State {
  books: fromBooks.State;
}

export const reducers: ActionReducerMap<State> = {
  books: fromBooks.reducer
};

export const metaReducers: MetaReducer<State>[] = [];


@NgModule({
  imports: [StoreModule.forFeature(BOOKS_FEATURE, reducers, {metaReducers})]
})
export class SharedStateBooksModule {
}

/**
 * Obtain all Feature State in Store
 */
export const selectBooksFeatureState = createFeatureSelector<State>(BOOKS_FEATURE);

/**
 * Isolates BooksState
 */
const selectBooksState = createSelector(selectBooksFeatureState, (state) => state.books);

/**
 * Books State Selectors
 */
export const selectAllBooks = createSelector(selectBooksState, state => state.collection);

export const selectActiveBookId = createSelector(selectBooksState, state => state.activeBookId);

export const selectActiveBook = createSelector(
  selectAllBooks,
  selectActiveBookId,
  (books, id) => {
    console.log('books:id', {books, id});
    return books?.find(b => b.id === id);
  }
);

export const selectEarningsTotals = createSelector(
  selectAllBooks,
  books => calculateBooksGrossEarnings(books)
);
