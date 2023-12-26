import {Component, OnInit} from '@angular/core';
import {BookModel, BookRequiredProps} from '../../../shared/models';
import {BooksPageActions} from '../../actions';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectActiveBook, selectAllBooks, selectEarningsTotals} from '../../../shared/state';

@Component({
  selector: 'app-books',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  readonly books$: Observable<BookModel[]>;
  readonly currentBook$: Observable<BookModel>;
  readonly total$: Observable<number>;

  constructor(private readonly store: Store) {
    this.books$ = store.select(selectAllBooks);
    this.currentBook$ = store.select(selectActiveBook);
    this.total$ = store.select(selectEarningsTotals);
  }

  ngOnInit() {
    this.removeSelectedBook();
    this.store.dispatch(BooksPageActions.initPageAction());
  }

  onSelect(book: BookModel) {
    this.store.dispatch(BooksPageActions.selectBookAction({bookId: book.id}));
  }

  onSave(book: BookRequiredProps | BookModel) {
    if ('id' in book) {
      this.updateBook(book);
    } else {
      this.saveBook(book);
    }
  }

  saveBook(bookProps: BookRequiredProps) {
    this.store.dispatch(BooksPageActions.saveBookAction({book: bookProps}));
  }

  updateBook(book: BookModel) {
    this.store.dispatch(BooksPageActions.updateBookAction({bookId: book.id, changes: book}));
  }

  onDelete(book: BookModel) {
    this.store.dispatch(BooksPageActions.deleteBookAction({bookId: book.id}));
  }

  onCancel() {
    this.removeSelectedBook();
  }

  private removeSelectedBook() {
    this.store.dispatch(BooksPageActions.clearSelectedBookAction());
  }
}
