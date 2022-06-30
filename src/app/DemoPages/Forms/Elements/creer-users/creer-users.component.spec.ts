import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerUsersComponent } from './creer-users.component';

describe('CreerUsersComponent', () => {
  let component: CreerUsersComponent;
  let fixture: ComponentFixture<CreerUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreerUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
