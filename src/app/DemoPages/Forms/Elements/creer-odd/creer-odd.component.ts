import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as jQuery from 'jquery';
import { IfddApiService } from 'src/app/services/ifdd-api/ifdd-api.service';

@Component({
  selector: 'app-creer-odd',
  templateUrl: './creer-odd.component.html',
  styleUrls: ['./creer-odd.component.sass']
})
export class CreerODDComponent implements OnInit {

  display=false
  OddForm!: FormGroup;
  constructor(private ifddApiService: IfddApiService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.OddForm = this.fb.group({
      nom: ['', [Validators.required]],
      numeroOdd: ['', Validators.required],
      numberCategories: ['', Validators.required],
      logo_ODD: ['', Validators.required],
      couleurODD: ['', Validators.required]
    });
  }
  
  submit(){
   var data = {
      name: this.OddForm.value.nom,
      number: this.OddForm.value.numeroOdd,
      number_categorie: this.OddForm.value.numberCategories,
      logo_odd: this.OddForm.value.logo_ODD,
      color: this.OddForm.value.couleurODD,
      
    };
    this.ifddApiService.creerODD(data)
    this.OddForm.reset()
  
    
    jQuery('app-creer-odd').css('display', 'none');
    
    alert(" bien ajouté")

    
  }
  annuler(){
    jQuery('app-creer-odd').css('display', 'none');
  }
}
