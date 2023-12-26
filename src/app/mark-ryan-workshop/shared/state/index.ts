import {ActionReducerMap, createFeatureSelector, createSelector, MetaReducer, StoreModule} from '@ngrx/store';
import * as fromAuth from './auth.reducer';
import * as fromBooks from './books.reducer';
import {NgModule} from '@angular/core';

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

export const selectBooksFeatureState = createFeatureSelector<State>(BOOKS_FEATURE);
