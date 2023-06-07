import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientsService } from './../../services/clients.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  inscriptionForm : FormGroup;
  path : any;
  imagePreview : any;

  constructor(private formBuilder : FormBuilder, private clientsService : ClientsService) { }

  ngOnInit() {
    this.inscriptionForm = this.formBuilder.group(
      {
        tel:["",[Validators.required,Validators.maxLength(8)]],
        pwd:["",[Validators.required,Validators.minLength(6),Validators.maxLength(20)]],
        nom:["",[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
        prenom:["",[Validators.required,Validators.minLength(3),Validators.maxLength(5)]],
      }
    )
  }
  inscription(){
    console.log("here object",this.inscriptionForm.value);
    let role = (this.path == "/inscription")? "client" : "admin";
    this.inscriptionForm.value.role = role;
    this.clientsService.inscrire(this.inscriptionForm.value).subscribe(
      (response) =>{
        console.log("here after signup" ,response);
        
      }
 ) }
 
}

