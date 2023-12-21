import {Component, Input} from '@angular/core';
import {BookModel} from '../../shared';

@Component({
  selector: 'app-ngrx-workshop-gross-total',
  templateUrl: './ngrx-workshop-gross-total.component.html',
  styleUrls: ['./ngrx-workshop-gross-total.component.scss']
})
export class NgrxWorkshopGrossTotalComponent {
  @Input() books!: BookModel[];

  get grossValue(): number {
    if (this.books && this.books.length > 0) {
      return this.books.map(b => parseFloat(b.earnings)).reduce((b, a) => b + a);
    }
    return 0;
  }

}
