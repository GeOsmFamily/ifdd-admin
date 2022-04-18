import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerOscComponent } from './creer-osc.component';

describe('CreerOscComponent', () => {
  let component: CreerOscComponent;
  let fixture: ComponentFixture<CreerOscComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerOscComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerOscComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
