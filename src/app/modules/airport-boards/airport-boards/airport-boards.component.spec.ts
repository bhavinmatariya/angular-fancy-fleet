import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportBoardsComponent } from './airport-boards.component';

describe('AirportBoardsComponent', () => {
  let component: AirportBoardsComponent;
  let fixture: ComponentFixture<AirportBoardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirportBoardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AirportBoardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
