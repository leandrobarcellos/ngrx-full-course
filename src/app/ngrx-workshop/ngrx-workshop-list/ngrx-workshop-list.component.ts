import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel} from '../../shared';

@Component({
  selector: 'app-ngrx-workshop-list',
  templateUrl: './ngrx-workshop-list.component.html',
  styleUrls: ['./ngrx-workshop-list.component.scss']
})
export class NgrxWorkshopListComponent {
  @Input() books: BookModel[] = []; // Assume books is an array of objects with title, earnings properties
  @Output() bookClick: EventEmitter<BookModel> = new EventEmitter();
  @Output() removeBookClick: EventEmitter<BookModel> = new EventEmitter();
  @Output() addBookClick: EventEmitter<BookModel> = new EventEmitter();

  onBookClick(book: BookModel) {
    if (book.canEdit) {
      this.bookClick.emit(book);
    }
  }

  removeBook(book: any) {
    this.removeBookClick.emit(book);
  }

  addBook(book: BookModel) {
    this.addBookClick.emit(book);
  }
}
