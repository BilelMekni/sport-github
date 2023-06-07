import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientsService } from 'src/app/services/clients.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  modifierForm : FormGroup;
  id : any;
  client : any={};
  formTitle:string;

  constructor(private activatedRoute:ActivatedRoute, private clientsService : ClientsService,
    private router : Router, private formBuilder : FormBuilder ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
 console.log(this.id);
 
    this.modifierForm = this.formBuilder.group(
      {
        telephone: ["", [Validators.required,Validators.pattern(/^\d{8}$/)]],
        nom: ["", [Validators.required, Validators.minLength(3)]],
        prenom: ["", [Validators.required, Validators.minLength(5)]]
      })
    this.formTitle = "Edit Client";
  
  this.clientsService.getClientById(this.id).subscribe(
    (data) => {
      console.log("here client",data);
      
      this.client = data.client;
      this.modifierForm.patchValue(this.client);
    }

 )

 
  }
  update(){
    this.modifierForm.value._id=this.id;
    console.log("here is edit form",this.modifierForm.value)
    this.clientsService.editClient(this.modifierForm.value).subscribe(
        (response) => { 
          console.log("here reponse is ", response);
          this.router.navigate(["clients"]);
        });
  }
  
  
}
