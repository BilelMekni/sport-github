import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players-tab',
  templateUrl: './players-tab.component.html',
  styleUrls: ['./players-tab.component.css']
})
export class PlayersTabComponent implements OnInit {
  

  players: any = [];
  playerForm: FormGroup;

  constructor(private router: Router,private playerService : PlayerService) { }

  ngOnInit() {
    // this.players = JSON.parse(localStorage.getItem("players") || "[]");
    this.playerService.getAllPlayers().subscribe(
      
        (response) =>{
          this.players = response.players
          
        }
      
    );
    
    console.log("Here players", this.players);



  }
  goToDisplay(id: number) {
    this.router.navigate([`playerInfo/${id}`])
  }
  goToEdit(id: number){
   
    this.router.navigate([`editPlayer/${id}`]);
  }


  deletePlayers(id: number) {
this.playerService.deletePlayer(id).subscribe(
  (response) =>{
    console.log("here response after delete", response);
   this.getAllPlayers();
  }
);


  }


  positionColor(pa : any, atk : any , GAR : any) {
    
    let result = "";
    
    if (pa == atk) {
      result = "green";

    } else if (pa == GAR) {
      result = "orange";
    } else {
      result = "blue";
    }
    return result;
  }

  // function jamaliya lil code
  getAllPlayers(){
    this.playerService.getAllPlayers().subscribe(
      (response) => {
        this.players = response.players
      }
    )
  }


}



