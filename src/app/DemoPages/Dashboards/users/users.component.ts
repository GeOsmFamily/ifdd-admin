import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  heading= "Utilisateurs";
  subheading= "Administration des utilisateurs";
  icon = "pe-7s-stopwatch icon-gradient bg-amy-crisp";
  button_creer = "Créer un utilisateur";

  constructor() { }

  ngOnInit(): void {
  }

}
