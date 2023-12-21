import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BookInfo, BookModel, GoogleApisBookData} from './index';
import {Observable, zip} from 'rxjs';
import {BooksService} from './books.service';
import {map, take} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleApisBooksService {
  private readonly api = environment.googleApisBooks;

  constructor(private readonly http: HttpClient, private readonly service: BooksService) {
  }

  getBooks(term: string): Observable<BookModel[]> {
    console.log('getBooks', `${this.api}?q=${term}`);
    return zip(
      this.http.get<any>(`${this.api}?q=${term}`),
      this.service.get(),
    ).pipe(
      take(1),
      map(([res, books]) => this.configureAvailableBooksInfo(res, books)),
    );
  }

  private extractBooksModels(external: BookInfo[]): BookModel[] {
    return external.map(b => {
      return {id: b.id, externalId: b.id, name: b.title, earnings: `${Math.random() * 1000}`} as BookModel;
    });
  }

  private configureAvailableBooksInfo(res: any, books: BookModel[]): BookModel[] {
    const mappedBooksInfo = res.items.map((b: GoogleApisBookData) => {
      return {id: b.id, ...b.volumeInfo} as BookInfo;
    });
    const booksInfo = mappedBooksInfo.filter((eb: BookInfo) => !books.find(b => b.externalId === eb.id));
    return this.extractBooksModels(booksInfo);
  }
}
