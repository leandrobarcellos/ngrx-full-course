import {Component, OnInit} from '@angular/core';
import {BookModel, BookRequiredProps} from '../../../shared/models';
import {BooksService} from '../../../shared/services';
import {BooksApiActions, BooksPageActions} from '../../actions';
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

  constructor(private booksService: BooksService, private readonly store: Store) {
    this.books$ = store.select(selectAllBooks);
    this.currentBook$ = store.select(selectActiveBook);
    this.total$ = store.select(selectEarningsTotals);
  }

  ngOnInit() {
    this.getBooks();
    this.store.dispatch(BooksPageActions.initPageAction());
  }

  getBooks() {
    this.booksService.all().subscribe((books: BookModel[]) => {
      this.store.dispatch(BooksApiActions.getBooks({books}));
    });
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
    this.booksService.create(bookProps).subscribe((book) => {
      this.getBooks();
      this.store.dispatch(BooksApiActions.createBook({book}));
    });
  }

  updateBook(book: BookModel) {
    this.store.dispatch(BooksPageActions.updateBookAction({book}));
    // tslint:disable-next-line:no-shadowed-variable
    this.booksService.update(book.id, book).subscribe((book) => {
      this.getBooks();
      this.store.dispatch(BooksApiActions.updateBook({book}));
    });
  }

  onDelete(book: BookModel) {
    this.store.dispatch(BooksPageActions.deleteBookAction({bookId: book.id}));

    this.booksService.delete(book.id).subscribe(() => {
      this.getBooks();
      this.store.dispatch(BooksApiActions.deleteBook({bookId: book.id}));
    });
  }

  onCancel() {
    this.store.dispatch(BooksPageActions.cancelBookAction());
  }
}
