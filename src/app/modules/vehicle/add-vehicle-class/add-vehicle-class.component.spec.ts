import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicleClassComponent } from './add-vehicle-class.component';

describe('AddVehicleClassComponent', () => {
  let component: AddVehicleClassComponent;
  let fixture: ComponentFixture<AddVehicleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddVehicleClassComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddVehicleClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
