import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './mark-ryan-workshop.component.html',
  styleUrls: ['./mark-ryan-workshop.component.css']
})
export class MarkRyanWorkshopComponent {
  title = 'NgRx Workshop';
  links = [{ path: 'books', icon: 'book', label: 'Books' }];
}
