import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVehicleClassComponent } from './view-vehicle-class.component';

describe('ViewVehicleClassComponent', () => {
  let component: ViewVehicleClassComponent;
  let fixture: ComponentFixture<ViewVehicleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewVehicleClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewVehicleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
