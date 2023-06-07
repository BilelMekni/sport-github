import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SearchWeatherService } from './../../services/search-weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weatherForm :FormGroup;
  weatherResult : any;
  path : String;
  title: String = "Teams";

  constructor( private formBuilder : FormBuilder, private searchWeatherService : SearchWeatherService,
    private router:Router) { }

  ngOnInit() {
    this.weatherForm = this.formBuilder.group({
      city:["",[Validators.required]]
    })
  }

  weather(){
console.log("Here object",this.weatherForm.value);
this.searchWeatherService.search(this.weatherForm.value).subscribe(
  (response)=>{
    console.log("here  from BE",response.result);
    this.weatherResult = response.result;
    
  }
);

  }
}
