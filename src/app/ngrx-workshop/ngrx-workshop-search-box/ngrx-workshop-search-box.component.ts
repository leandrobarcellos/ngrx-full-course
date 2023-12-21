import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-ngrx-workshop-search-box',
  templateUrl: './ngrx-workshop-search-box.component.html',
  styleUrls: ['./ngrx-workshop-search-box.component.scss']
})
export class NgrxWorkshopSearchBoxComponent {
  readonly form = this.fb.group({
    movieName: this.fb.control(null, Validators.required)
  });

  @Output()
  readonly clickSearch = new EventEmitter<any>();
  @Output()
  readonly clickShowFavourites = new EventEmitter<unknown>();

  constructor(private readonly fb: FormBuilder) {
  }

  get movieName(): FormControl {
    return this.form.get('movieName') as FormControl;
  }

  onClickSearch() {
    if (this.form.valid) {
      this.clickSearch.emit(this.movieName.value);
    }
  }

  onClickShowFavourites() {
    this.clickShowFavourites.emit();
  }
}
