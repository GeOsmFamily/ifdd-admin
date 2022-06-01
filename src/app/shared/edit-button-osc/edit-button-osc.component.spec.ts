import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditButtonOscComponent } from './edit-button-osc.component';

describe('EditButtonOscComponent', () => {
  let component: EditButtonOscComponent;
  let fixture: ComponentFixture<EditButtonOscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditButtonOscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditButtonOscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
