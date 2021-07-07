import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewScheduleAirlineComponent } from './view-schedule-airline.component';

describe('ViewScheduleAirlineComponent', () => {
  let component: ViewScheduleAirlineComponent;
  let fixture: ComponentFixture<ViewScheduleAirlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewScheduleAirlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewScheduleAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
