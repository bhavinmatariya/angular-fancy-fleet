import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleFeatureComponent } from './vehicle-feature.component';

describe('VehicleFeatureComponent', () => {
  let component: VehicleFeatureComponent;
  let fixture: ComponentFixture<VehicleFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VehicleFeatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VehicleFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
