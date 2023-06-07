import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { getObjectsFromLS } from 'src/app/shared/genericFunctions';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput : any;
  @Output() matchesToEmit:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  scoreColor(scoreOne, scoreTwo){
    let result = "";
    if (scoreOne > scoreTwo) {
      result = "green";
      
    } else if (scoreOne < scoreTwo) {
      result = "orange";
    } else{
      result = "blue";
    }
    return result;
  }
  teamStyle(scoreOne : any, scoreTwo:any){
    let result;
    if (scoreOne > scoreTwo) {
      result = 1;
      
    } else if (scoreOne < scoreTwo) {
      result = -1;
    } else{
      result = 0;
    }
    return result;

  }
  resultStyle(scoreOne: any, scoreTwo:any){
    let result;
    if (scoreOne > scoreTwo) {
      result = ['green', 1, 'win'];
      
    } else if (scoreOne < scoreTwo) {
      result = ['orange', -1, 'loss'];
    } else{
      result = ['blue', 0, 'draw'];
    }
    return result;


  }
  searchScorer(playerId:number){
    let players=getObjectsFromLS("players");
    let scorer={};
    scorer=players.find((obj:any)=>{return playerId==obj.id})
    return scorer;

}
deleteMatch(id){
  alert(id);
  let matches = getObjectsFromLS("matches");
  for (let i = 0; i < matches.length; i++) {
    if (matches[i].id == id) {
      matches.splice(i, 1);
      // send matches to parent (emit)
      this.matchesToEmit.emit(matches);
      break;
      
    }
    
  }
  localStorage.setItem("matches",JSON.stringify(matches));

}


}
  
