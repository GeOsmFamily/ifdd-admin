
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ModalsComponent } from 'src/app/DemoPages/Components/modals/modals.component';
import { Datum } from '../osc';

@Component({
  selector: 'app-edit-button-osc',
  templateUrl: './edit-button-osc.component.html',
  styleUrls: ['./edit-button-osc.component.sass']
})
export class EditButtonOscComponent implements OnInit {


 
  @ViewChild('modal') private modalComponent: ModalsComponent
  
  @Input() osc:Datum

  editStepper=false
  constructor() { }

  ngOnInit(): void {
  }

  /*openStepper(){
    if( this.editStepper)
      this.editStepper=false
    else{this.editSepper=true}
  }*/
 openModal() {
    return  this.modalComponent.open()
  }
}
