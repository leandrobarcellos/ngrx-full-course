import { Component, OnInit } from '@angular/core';
import {
  BookModel,
  calculateBooksGrossEarnings,
  BookRequiredProps
} from '../../../shared/models';
import { BooksService } from '../../../shared/services';
import {BooksApiActions, BooksPageActions} from '../../actions';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-books',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  books: BookModel[] = [];
  currentBook: BookModel | null = null;
  total = 0;

  constructor(private booksService: BooksService, private readonly store: Store) {}

  ngOnInit() {
    this.getBooks();
    this.removeSelectedBook();

    this.store.dispatch(BooksPageActions.initPageAction());
  }

  getBooks() {
    this.booksService.all().subscribe((books: BookModel[]) => {
      this.books = books;
      this.updateTotals(books);
      this.store.dispatch(BooksApiActions.getBooks({books}));
    });
  }

  updateTotals(books: BookModel[]) {
    this.total = calculateBooksGrossEarnings(books);
  }

  onSelect(book: BookModel) {
    this.store.dispatch(BooksPageActions.selectBookAction({bookId: book.id}));
    this.store.dispatch(BooksApiActions.getBook({bookId: book.id}));

    this.currentBook = book;
  }

  onCancel() {
    this.removeSelectedBook();
  }

  removeSelectedBook() {
    this.currentBook = null as any;
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
      this.removeSelectedBook();
      this.store.dispatch(BooksApiActions.createBook({book}));
    });
  }

  updateBook(book: BookModel) {
    this.store.dispatch(BooksPageActions.updateBookAction({book}));
    // tslint:disable-next-line:no-shadowed-variable
    this.booksService.update(book.id, book).subscribe((book) => {
      this.getBooks();
      this.removeSelectedBook();
      this.store.dispatch(BooksApiActions.updateBook({book}));
    });
  }

  onDelete(book: BookModel) {
    this.store.dispatch(BooksPageActions.deleteBookAction({bookId: book.id}));

    this.booksService.delete(book.id).subscribe(() => {
      this.getBooks();
      this.removeSelectedBook();
      this.store.dispatch(BooksApiActions.deleteBook({bookId: book.id}));
    });
  }
}
