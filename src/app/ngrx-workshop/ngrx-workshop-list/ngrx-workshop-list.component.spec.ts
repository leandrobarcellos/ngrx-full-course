import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopListComponent } from './ngrx-workshop-list.component';

describe('MoviesListComponent', () => {
  let component: NgrxWorkshopListComponent;
  let fixture: ComponentFixture<NgrxWorkshopListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
