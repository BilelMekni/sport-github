import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams-table',
  templateUrl: './teams-table.component.html',
  styleUrls: ['./teams-table.component.css']
})
export class TeamsTableComponent implements OnInit {

  teams: any = [];

  constructor( private router : Router, private teamService : TeamService) { }

  ngOnInit() {
    // this.teams = JSON.parse(localStorage.getItem("teams") || "[]");
    this.getAllTeams();

    console.log("Here teams",this.teams);
    
  }
  // modifier
  goToEdit(id: number){
   
    this.router.navigate([`editTeam/${id}`]);
  }
  // go to dispaly
  // goToDisplay(id: number){
  //   this.router.navigate([`matchsInfo/${id}`]);
  // }
   // delete from ls
   deleteTeams(id: number) {
    this.teamService.deleteTeam(id).subscribe(
      (response) =>{
        console.log("Here response after delete",response);
        this.getAllTeams();
        
      }
    )


  }

  // function resume
  getAllTeams(){
    this.teamService.getAllTeams().subscribe(
      (response) => {
        this.teams = response.teams
      }
    );
  }


}
