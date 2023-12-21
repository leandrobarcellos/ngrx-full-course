import { TestBed } from '@angular/core/testing';

import { GoogleApisBooksService } from './google-apis-books.service';

describe('BooksService', () => {
  let service: GoogleApisBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleApisBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
