import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscStepperComponent } from './osc-stepper.component';

describe('OscStepperComponent', () => {
  let component: OscStepperComponent;
  let fixture: ComponentFixture<OscStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OscStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
