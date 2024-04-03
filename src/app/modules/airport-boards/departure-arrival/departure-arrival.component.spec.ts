import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartureArrivalComponent } from './departure-arrival.component';

describe('DepartureArrivalComponent', () => {
  let component: DepartureArrivalComponent;
  let fixture: ComponentFixture<DepartureArrivalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DepartureArrivalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DepartureArrivalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
