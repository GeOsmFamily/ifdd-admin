import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creer-users',
  templateUrl: './creer-users.component.html',
  styleUrls: ['./creer-users.component.sass']
})
export class CreerUsersComponent implements OnInit {

  userForm:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
