import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopListItemComponent } from './ngrx-workshop-list-item.component';

describe('MoviesListItemComponent', () => {
  let component: NgrxWorkshopListItemComponent;
  let fixture: ComponentFixture<NgrxWorkshopListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
