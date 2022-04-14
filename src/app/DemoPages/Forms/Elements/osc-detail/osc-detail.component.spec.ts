import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscDetailComponent } from './osc-detail.component';

describe('OscDetailComponent', () => {
  let component: OscDetailComponent;
  let fixture: ComponentFixture<OscDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OscDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
