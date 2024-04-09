import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleClassComponent } from './vehicle-class.component';

describe('VehicleClassComponent', () => {
  let component: VehicleClassComponent;
  let fixture: ComponentFixture<VehicleClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleClassComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VehicleClassComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
