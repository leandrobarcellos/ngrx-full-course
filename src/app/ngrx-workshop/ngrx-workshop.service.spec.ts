import { TestBed } from '@angular/core/testing';

import { NgrxWorkshopService } from './ngrx-workshop.service';

describe('SearchMoviesService', () => {
  let service: NgrxWorkshopService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgrxWorkshopService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
