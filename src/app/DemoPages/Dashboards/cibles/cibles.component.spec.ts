import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiblesComponent } from './cibles.component';

describe('CiblesComponent', () => {
  let component: CiblesComponent;
  let fixture: ComponentFixture<CiblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
