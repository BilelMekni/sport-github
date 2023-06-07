import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {

  searchForm:FormGroup;
  matches : any;
  id: any;
  match :any = [];
  constructor( private formBuilder : FormBuilder , private router : Router,
    private matchService : MatchService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group(
      {
        scoreOne:["",[Validators.required]],
        scoreTwo :["",[Validators.required]],
      }
    );
  }
  search(){
    console.log("Here object", this.searchForm.value);
    
    this.matchService.searchByScores(this.searchForm.value).subscribe(
      (data) =>{
        this.matches = data.matches;
      }
    );
      
   
    
  }

}
