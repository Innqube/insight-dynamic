import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MissionVissionValuesComponent} from './mission-vission-values.component';

describe('MissionVissionValuesComponent', () => {
  let component: MissionVissionValuesComponent;
  let fixture: ComponentFixture<MissionVissionValuesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissionVissionValuesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionVissionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
