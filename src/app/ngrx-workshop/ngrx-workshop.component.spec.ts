import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopComponent } from './ngrx-workshop.component';

describe('SearchMoviesPageComponent', () => {
  let component: NgrxWorkshopComponent;
  let fixture: ComponentFixture<NgrxWorkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
