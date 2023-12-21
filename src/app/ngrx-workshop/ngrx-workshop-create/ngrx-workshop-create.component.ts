import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookModel} from '../../shared';

@Component({
  selector: 'app-ngrx-workshop-create',
  templateUrl: './ngrx-workshop-create.component.html',
  styleUrls: ['./ngrx-workshop-create.component.scss']
})
export class NgrxWorkshopCreateComponent implements OnChanges {
  @Output() saveBook: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  @Input() book!: BookModel;
  bookForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.bookForm = this.fb.group({
      id: [''],
      name: ['', Validators.required],
      earnings: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
      description: ['']
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const book = changes.book.currentValue;
    this.bookForm.reset();
    if (book) {
      this.bookForm.patchValue(book);
    }
  }

  get name(): FormControl {
    return this.bookForm.get('name') as FormControl;
  }

  get id(): FormControl {
    return this.bookForm.get('id') as FormControl;
  }

  onSave() {
    if (this.bookForm.valid) {
      this.saveBook.emit(this.bookForm.value);
      this.bookForm.reset();
    }
  }

  onCancel() {
    this.bookForm.reset();
    this.cancel.emit();
  }
}
