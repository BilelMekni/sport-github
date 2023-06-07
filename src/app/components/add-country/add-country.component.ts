import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { addObject, generateId, getObjectsFromLS } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

countryForm :FormGroup;
country:any = {};
  constructor() { }

  ngOnInit() {
  }
  addCountry(){
    let countries = getObjectsFromLS("countries");
    addObject(this.country,"countries", countries);
 
  }

}
