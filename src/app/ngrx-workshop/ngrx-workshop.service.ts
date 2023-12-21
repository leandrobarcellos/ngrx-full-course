import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BookModel} from '../shared';
import {BooksService} from '../shared/books.service';
import {GoogleApisBooksService} from '../shared/google-apis-books.service';
import {take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NgrxWorkshopService {
  // tslint:disable-next-line:variable-name
  private _favourites: BookModel[] = [];

  constructor(private readonly service: BooksService, private readonly googleApisBooks: GoogleApisBooksService) {
  }


  saveBook(book: BookModel): Observable<any> {
    let save$;
    if (book.id && book.id.length > 0) {
      save$ = this.patch(book);
    } else {
      save$ = this.post(book);
    }
    return save$;
  }

  getSavedBooks(): Observable<BookModel[]> {
    return this.service.get().pipe(
      take(1),
    );
  }

  get favourites(): BookModel[] {
    return this._favourites;
  }

  removeFavourite($event: BookModel): number {
    let num = -1;
    const editableBook = this._favourites.find(f => f.id === $event.id);
    if (editableBook) {
      num = this._favourites.indexOf(editableBook);
      this._favourites.splice(num, 1);
    }
    return num;
  }

  getExternalBooks(term: string): Observable<BookModel[]> {
    return this.googleApisBooks.getBooks(term);
  }

  patch(book: BookModel): Observable<any> {
    return this.service.patch(book);
  }

  post(next: BookModel): Observable<any> {
    return this.service.post(next);
  }

  delete(id: string): Observable<any> {
    return this.service.delete(id);
  }
}

