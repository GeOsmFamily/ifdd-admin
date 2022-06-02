import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FicheODDComponent } from "./fiche-odd.component";

describe("FicheODDComponent", () => {
  let component: FicheODDComponent;
  let fixture: ComponentFixture<FicheODDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheODDComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheODDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
