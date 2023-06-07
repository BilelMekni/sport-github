import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { generateId, addObject, getObjectsFromLS } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-stadium',
  templateUrl: './add-stadium.component.html',
  styleUrls: ['./add-stadium.component.css']
})
export class AddStadiumComponent implements OnInit {

  // FORM ID
  staduimForm:FormGroup;
 countries : any=[];
 staduims : any=[];
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.countries = getObjectsFromLS("countries");
   this.staduims = getObjectsFromLS("stadiums");
    this.staduimForm = this.formBuilder.group(
      {
        name:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        capacity:["",[Validators.required]],
        country:["",[Validators.required]],
      }
    )
  }
  addstaduim(){
    addObject(this.staduimForm.value, "stadiums" , this.staduims);
}
}


