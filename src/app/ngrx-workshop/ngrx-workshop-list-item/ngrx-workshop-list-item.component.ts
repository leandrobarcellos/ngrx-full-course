import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BookModel} from '../../shared';

@Component({
  selector: 'app-ngrx-workshop-list-item',
  templateUrl: './ngrx-workshop-list-item.component.html',
  styleUrls: ['./ngrx-workshop-list-item.component.scss']
})
export class NgrxWorkshopListItemComponent {

  @Input()
  book!: BookModel;
  @Output()
  readonly clickFavourite = new EventEmitter<BookModel>();

  get bookId(): string {
    return this.book.id;
  }

  get bookName(): string {
    return this.book.name;
  }

  get bookSinopsis(): string {
    return this.book.description || '';
  }

  onClickFavourite() {
    this.clickFavourite.emit(this.book);
  }
}
