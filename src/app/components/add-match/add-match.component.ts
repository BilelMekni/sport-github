import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from 'src/app/services/match.service';
import { generateId, getObjectsFromLS } from 'src/app/shared/genericFunctions';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
// form Id
matchForm: FormGroup;
// Define Object
match:any = {};
//ID
id : any;
formTitle: string = "Add Match";
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private matchService : MatchService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.formTitle = "Edit Match";
      // search object by ID
      this.matchService.getMatchById(this.id).subscribe(
        (data) => {
          this.match = data.match;
        }
      )
      // for (let i = 0; i < matches.length; i++) {
      //   if (matches[i].id == this.id) {
      //     this.match = matches[i];
      //     break;
          
      //   }
        
      // }
     

    }
  }
// Method (ngSubmit)
// validate(){
  // let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  // let matchId = JSON.parse(localStorage.getItem("matchId") || "0");
  // this.match.id = matchId + 1;
  // matches.push(this.match);
  // localStorage.setItem("matches",JSON.stringify(matches));
  // localStorage.setItem("matchId", matchId + 1 );
  // let matches = JSON.parse(localStorage.getItem("matches") || "[]");
  // if (this.id) {
    // Edit Match
  //   for (let i = 0; i < matches.length; i++) {
  //     if (matches[i].id == this.id) {
  //       matches[i] = this.match;
  //       break;
        
  //     }
      
      
  //   }
  // } else {
   
  //   this.match.id = generateId(matches);
  //   matches.push(this.match);
    
  
    
  // }
  // localStorage.setItem("matches", JSON.stringify(matches));
  // // // Navigation to admin
  // this.router.navigate(["admin"]);
  

  // }
  // ---------methode ala service---------//
  // Methode (ngSubmit)
  validate(){
    if (this.id) {
      // Edit Match
      this.matchService.editMatch(this.match).subscribe(
        (data) =>{
          console.log("Here message after edit", data.message);
          
        }
      );
    } else {
      // Add Match
      this.matchService.addMatch(this.match).subscribe(
        (response) =>{
          console.log("Here response", response);
          
        }
      );
    }
    this.router.navigate(["admin"]);

  }
 

}
