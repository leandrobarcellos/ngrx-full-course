import { createAction, props } from '@ngrx/store';
import { BookModel } from '../../shared/models';


export const getBook = createAction(
  '[Books API] [get]',
  props<{ bookId: string }>()
);

export const getBooks = createAction(
  '[Books API] [get]',
  props<{ books: BookModel[] }>()
);

export const createBook = createAction(
  '[Books API] [post]',
  props<{ book: BookModel }>()
);

export const updateBook = createAction(
  '[Books API] [put]',
  props<{ book: BookModel }>()
);

export const deleteBook = createAction(
  '[Books API] [delete]',
  props<{ bookId: string }>()
);

// possible failures
// "[Books API] [get] failure"
// "[Books API] [post] failure"
// "[Books API] [put] failure"
// "[Books API] [delete] failure"

