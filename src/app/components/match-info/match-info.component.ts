import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-match-info',
  templateUrl: './match-info.component.html',
  styleUrls: ['./match-info.component.css']
})
export class MatchInfoComponent implements OnInit {
  butteurForm:FormGroup;
  butteur : any;
  addCommentForm: FormGroup;

id:any;
match: any = {};
player : any = {};

  constructor(private route : Router,
  private  activatedRouter : ActivatedRoute , private matchService : MatchService,
  private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.addCommentForm = this.formBuilder.group(
      {
        content: ["", [Validators.required]],
       
      }
    )

    this.id = this.activatedRouter.snapshot.paramMap.get("id");
    // let matches = getObjectsFromLS("matches");
    
    // this.match = matches.find((elt:any) => {return elt.id == this.id});
   
    this.matchService.getMatchById(this.id).subscribe(
      (data) =>{
        
      this.match = data.match;
        
      }
    )
  }

generatButteur(){
let player = getObjectsFromLS("matches");
for (let i = 0; i < player.length; i++) {
  this.butteur = [[]]
  
  
}
} 

add(){
  let comment = this.addCommentForm.value;
  comment.matchId = this.id;
  comment.userId= localStorage.getItem("connectedUserId");
  this.matchService.addComment(comment).subscribe();
  
  
}
}
