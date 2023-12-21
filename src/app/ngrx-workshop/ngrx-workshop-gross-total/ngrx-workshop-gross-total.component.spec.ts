import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopGrossTotalComponent } from './ngrx-workshop-gross-total.component';

describe('BooksGrossTotalComponent', () => {
  let component: NgrxWorkshopGrossTotalComponent;
  let fixture: ComponentFixture<NgrxWorkshopGrossTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopGrossTotalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopGrossTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
