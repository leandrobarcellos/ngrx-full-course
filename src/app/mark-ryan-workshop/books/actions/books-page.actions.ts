import { createAction, props } from '@ngrx/store';
import { BookModel, BookRequiredProps } from '../../shared/models';


export const initPageAction = createAction('[Book Page][initPage]');

export const selectBookAction = createAction(
  '[Book Page][select]',
  props<{bookId: string}>()
);

export const saveBookAction = createAction(
  '[Book Page][save]',
  props<{book: BookRequiredProps}>()
);

export const updateBookAction = createAction(
  '[Book Page][update]',
  props<{bookId, changes: BookRequiredProps}>()
);

export const clearSelectedBookAction = createAction('[Book Page][clear]');

export const deleteBookAction = createAction(
  '[Book Page][delete]',
  props<{bookId: string}>()
);

// will be refactored later ...
export function calculateBooksGrossEarnings(books: BookModel[]) {
  return books.reduce((total, book) => {
    return total + parseInt(`${book.earnings}`, 10) || 0;
  }, 0);
}
