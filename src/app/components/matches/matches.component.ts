import { Component, OnInit } from '@angular/core';
import { getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  matches:any=[]

  constructor( private matchService: MatchService) { }

  ngOnInit() {
  // this.matches = getObjectsFromLS("matches");
  this.matchService.getAllMatches().subscribe(
    (response) =>{
      this.matches = response.matches;
      
    }
  );
  }
 
  updateMatches(x:any) {
    this.matches = x;
    }
}
