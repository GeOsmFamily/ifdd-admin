import { Component, ViewChild, TemplateRef } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

const PrimaryWhite = "#fff";
const SecondaryGrey = "#ccc";
const PrimaryRed = "var(--danger)";
const SecondaryBlue = "var(--primary)";

@Component({
  selector: "app-cards",
  templateUrl: "./cards.component.html",
  styles: [],
})
export class CardsComponent {
  heading = "";
  subheading = "  Création des Organisations de la Société Civile.";
  icon = "pe-7s-stopwatch icon-gradient bg-amy-crisp";

  constructor(private sanitizer: DomSanitizer) {}
}
