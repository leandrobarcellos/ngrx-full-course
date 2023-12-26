import {Injectable} from '@angular/core';
import {Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import {catchError, concatMap, map, mergeMap, take} from 'rxjs/operators';
import {BooksService} from '../shared/services';
import {BooksApiActions, BooksPageActions} from './actions';
import {throwError} from 'rxjs';

@Injectable({providedIn: 'root'})
export class BooksApiEffects {
  constructor(private readonly service: BooksService, private readonly actions$: Actions) {
  }

  // @Effect() that annotation must not be used. If so, it will cause to execute the effect twice when it's called
  readonly loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksPageActions.initPageAction),
      mergeMap(() => this.service.all()),
      map(books => BooksApiActions.getBooks({books})),
      catchError(err => {
        console.error('loadBooks$:error', err);
        return throwError(() => err);
      })
    ));

  // @Effect() that annotation must not be used. If so, it will cause to execute the effect twice when it's called
  readonly createBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksPageActions.saveBookAction),
      concatMap(({book}) => this.service.create(book)),
      map(book => BooksApiActions.createBook({book})),
      catchError(err => {
        console.error('createBook$:error', err);
        return throwError(() => err);
      })
    ));

  // @Effect() that annotation must not be used. If so, it will cause to execute the effect twice when it's called
  readonly updateBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksPageActions.updateBookAction),
      concatMap(({bookId, changes}) => this.service.update(bookId, changes)),
      map(book => BooksApiActions.updateBook({book})),
      catchError(err => {
        console.error('updateBook$:error', err);
        return throwError(() => err);
      })
    ));

  // @Effect() that annotation must not be used. If so, it will cause to execute the effect twice when it's called
  readonly deleteBook$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BooksPageActions.deleteBookAction),
      mergeMap(({bookId}) => this.service.delete(bookId).pipe(
        map(() => BooksApiActions.deleteBook({bookId})))
      ),
      catchError(err => {
        console.error('deleteBook$:error', err);
        return throwError(() => err);
      })
    ));

}
