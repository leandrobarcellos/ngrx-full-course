import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {BookModel} from './index';
import {Observable} from 'rxjs';
import {v4 as uuid4} from 'uuid';
import {take} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private readonly http: HttpClient) {
  }

  get(params?: HttpParams | {
    [param: string]: string | string[];
  }): Observable<BookModel[]> {
    return this.http.get<BookModel[]>(`${environment.booksApi}`, {params}).pipe(
      take(1)
    );
  }

  getById(id: string, params?: HttpParams | {
    [param: string]: string | string[];
  }): Observable<BookModel> {
    return this.http.get<BookModel>(`${environment.booksApi}/${id}`, {params}).pipe(
      take(1)
    );
  }

  post(book: BookModel): Observable<any> {
    const body = {
      ...book,
      id: uuid4(),
      canEdit: true
    };
    return this.http.post<BookModel>(`${environment.booksApi}`, body).pipe(
      take(1)
    );
  }

  patch(body: BookModel): Observable<any> {
    return this.http.patch<BookModel>(`${environment.booksApi}`, body).pipe(
      take(1)
    );
  }

  delete(id: string) {
    return this.http.delete(`${environment.booksApi}/${id}`).pipe(
      take(1)
    );
  }
}
