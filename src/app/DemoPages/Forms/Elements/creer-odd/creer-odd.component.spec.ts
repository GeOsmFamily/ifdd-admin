import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerODDComponent } from './creer-odd.component';

describe('CreerODDComponent', () => {
  let component: CreerODDComponent;
  let fixture: ComponentFixture<CreerODDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerODDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerODDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
