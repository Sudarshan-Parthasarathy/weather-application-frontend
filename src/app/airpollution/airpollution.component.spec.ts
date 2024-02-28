import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirpollutionComponentComponent } from './airpollution.component';

describe('AirpollutionComponent', () => {
  let component: AirpollutionComponentComponent;
  let fixture: ComponentFixture<AirpollutionComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirpollutionComponentComponent]
    });
    fixture = TestBed.createComponent(AirpollutionComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
