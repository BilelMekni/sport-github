import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { generateId, getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { ActivatedRoute, Router } from '@angular/router';

import { TeamService } from './../../services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  team: any = {};
  teamForm: FormGroup;
  id : any;
  formTitle : string = "ADD Team"

  constructor( private activatedRoute : ActivatedRoute,
    private router : Router,
    private teamService : TeamService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.formTitle = "Edit Team";
      // search object by ID
      let teams = getObjectsFromLS("teams");
      
      this.team=teams.find((obj:any)=> {return obj.id == this.id})

    }
  }
//   addTeam() {
//     let teams = JSON.parse(localStorage.getItem("teams") || "[]");
//     if (this.id) {
//       // Edit Match
//       for (let i = 0; i < teams.length; i++) {
//         if (teams[i].id == this.id) {
//           teams[i] = this.team;
//           break;
          
//         }
        
        
//       }
//     } else {

    
//     this.team.id = generateId(teams);
//     teams.push(this.team);
   

//   }
//   localStorage.setItem("teams", JSON.stringify(teams));
  
// // // Navigation to admin
// this.router.navigate(["admin"]);
  


// }
addTeam(){
  if (this.id) {
    // Edit Player
  } else {
    // Add Player
    this.teamService.addTeam(this.team).subscribe();
  }

}
}



