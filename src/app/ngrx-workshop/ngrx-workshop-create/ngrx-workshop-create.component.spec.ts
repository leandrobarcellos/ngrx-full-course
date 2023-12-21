import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWorkshopCreateComponent } from './ngrx-workshop-create.component';

describe('CreateBookComponent', () => {
  let component: NgrxWorkshopCreateComponent;
  let fixture: ComponentFixture<NgrxWorkshopCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgrxWorkshopCreateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgrxWorkshopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
