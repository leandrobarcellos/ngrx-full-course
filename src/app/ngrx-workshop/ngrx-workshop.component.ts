import {Component, OnInit} from '@angular/core';
import {Subject, zip} from 'rxjs';
import {BookModel} from '../shared';
import {NgrxWorkshopService} from './ngrx-workshop.service';
import {map, switchMap, takeUntil, tap} from 'rxjs/operators';

@Component({
  selector: 'app-ngrx-workshop',
  templateUrl: './ngrx-workshop.component.html',
  styleUrls: ['./ngrx-workshop.component.scss'],
})
export class NgrxWorkshopComponent implements OnInit {

  private readonly bookSearch$ = new Subject<string>();
  private readonly bookSave$ = new Subject<BookModel>();
  private readonly bookRemove$ = new Subject<BookModel>();
  private readonly unsubscribe$ = new Subject<unknown>();
  books!: BookModel[];
  book!: BookModel;
  externalBooks!: BookModel[];

  constructor(private readonly service: NgrxWorkshopService) {
  }

  ngOnInit() {
    this.initBookSearch$();
    this.initBookSave$();
    this.initBookRemove$();
  }

  private initBookSearch$() {
    this.bookSearch$.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(next => zip(
        this.service.getExternalBooks(next),
        this.service.getSavedBooks()
      )),
      map(([external, books]) => {
        this.externalBooks = external;
        this.books = books;
      }),
    ).subscribe();
  }

  onClickSearch(term: string) {
    this.bookSearch$.next(term);
  }

  onClickFavourite(book: BookModel) {
    this.onSaveBook(book);
  }

  onClickShowFavourites(): void {
    this.service.getSavedBooks().pipe(
      tap(next => this.books = next)
    ).subscribe();
  }

  onRemoveBookClick($event: BookModel) {
    this.bookRemove$.next($event);
  }

  onBookClick($event: BookModel) {
    this.book = $event;
  }

  onSaveBook($event: BookModel) {
    this.bookSave$.next($event);
  }

  private initBookSave$() {
    this.bookSave$.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(next => this.service.post(next)),
      switchMap(() => this.service.getSavedBooks()),
      tap((next: BookModel[]) => this.books = next)
    ).subscribe();
  }

  private initBookRemove$() {
    this.bookRemove$.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(next => this.service.delete(next.id)),
      switchMap(() => this.service.getSavedBooks()),
      tap((next: BookModel[]) => this.books = next)
    ).subscribe();
  }

  private initBookUpdate$() {
    this.bookRemove$.pipe(
      takeUntil(this.unsubscribe$),
      switchMap(next => this.service.patch(next)),
      switchMap(() => this.service.getSavedBooks()),
      tap((next: BookModel[]) => this.books = next)
    ).subscribe();
  }

  onSaveExternalBook($event: BookModel) {
    this.bookSave$.next($event);
    // tslint:disable-next-line:no-non-null-assertion
    const bookModel = this.externalBooks.find(eb => eb.externalId === $event.externalId)!;
    const indexOf = this.externalBooks.indexOf(bookModel);
    this.externalBooks.splice(indexOf, 1);
  }

}
