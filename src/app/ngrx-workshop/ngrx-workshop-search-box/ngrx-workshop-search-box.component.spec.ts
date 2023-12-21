import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopSearchBoxComponent } from './ngrx-workshop-search-box.component';

describe('SearchMoviesBoxComponent', () => {
  let component: NgrxWorkshopSearchBoxComponent;
  let fixture: ComponentFixture<NgrxWorkshopSearchBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopSearchBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopSearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
