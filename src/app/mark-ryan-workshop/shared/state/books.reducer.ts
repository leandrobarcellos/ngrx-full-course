import {createReducer, on, Action, createSelector} from '@ngrx/store';
import {BookModel, calculateBooksGrossEarnings} from '../models';
import {BooksPageActions, BooksApiActions} from '../../books/actions';


const createBook = (books: BookModel[], book: BookModel) => [...books, book];
const updateBook = (books: BookModel[], changes: BookModel) => books.map(b => b.id === changes.id ? Object.assign({id: b.id}, changes) : b);
const deleteBook = (books: BookModel[], bookId: string) => books.filter(b => b.id !== bookId);

export interface State {
  collection: BookModel[]; // used as cache
  activeBookId: string | null;
}

export const initialState: State = {
  collection: [],
  activeBookId: null
};

export const reducer = createReducer(
  on(
    BooksPageActions.initPageAction, // when the page is initiated
    // not working on same declaration BooksPageActions.cancelBookAction, // or when user clicks on cancel button we'll clear the state
    () => ({...initialState})),
  on(
    BooksPageActions.clearSelectedBookAction, // or when user clicks on cancel button we'll clear the state
    (state: any) => {
      return {
        ...state, // keeps the previous state data
        activeBookId: null // clear the value of the activeBookId state attribute
      };
    }
  ),
  on(
    BooksPageActions.selectBookAction, // when user select a book will change the state using the action props
    (state: any, {bookId}) => {
      return {
        // keeps the previous state data
        ...state,
        // changes the activeBookId state attribute by the incoming from action. Id of the book the user clicked on.
        activeBookId: bookId
      };
    }
  ),
  on(
    BooksApiActions.getBooks,
    (state: any, {books}) => {
      return {
        ...state,
        collection: books
      };
    }
  ),
  on(
    BooksApiActions.createBook,
    (state: any, {book}) => {
      return {
        activeBookId: null,
        collection: createBook(state.collection, book)
      };
    }
  ),
  on(
    BooksApiActions.updateBook,
    (state: any, {book}) => {
      return {
        activeBookId: null,
        collection: updateBook(state.collection, book)
      };
    }
  ),
  on(
    BooksApiActions.deleteBook,
    (state: any, {bookId}) => {
      return {
        activeBookId: null,
        collection: deleteBook(state.collection, bookId)
      };
    }
  )
);
