import { ComponentFixture, TestBed } from "@angular/core/testing";

import { FicheOSCComponent } from "./fiche-osc.component";

describe("FicheOSCComponent", () => {
  let component: FicheOSCComponent;
  let fixture: ComponentFixture<FicheOSCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FicheOSCComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheOSCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
