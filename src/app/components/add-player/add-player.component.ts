import { FormGroup } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { generateId, getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { PlayerService } from 'src/app/services/player.service';


@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  playerForm: FormGroup;
  player: any = {};
  id : any;
  formTitle: string = "Add Player";

  @Input()
  title: string;

  constructor( private router : Router,
    private activatedRoute : ActivatedRoute,
    private playerService : PlayerService ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("x");
    if (this.id) {
      this.formTitle = "Edit Player";
      // search object by ID

      this.playerService.getPlayerById(this.id).subscribe(
        (data) => {
          this.player = data.player;
        }
      )
      // let players = getObjectsFromLS("players");
      
      // this.player= players.find((obj:any)=> {return obj.id == this.id})

    }
  }
//   validaite() {
//     var playerTab = JSON.parse(localStorage.getItem("players") || "[]");
//     if (this.id) {
//       // Edit Match
//       for (let i = 0; i < playerTab.length; i++) {
//         if (playerTab[i].id == this.id) {
//           playerTab[i] = this.player;
//           break;
          
//         }
        
        
//       }
//     } else {
    
    
   
//     this.player.id = this.generateId() + 1;
//     this.player.image ="assets/images/img_1.jpg";
//     playerTab.push(this.player);
    


    
//   }
//   localStorage.setItem("players", JSON.stringify(playerTab));
    
//     this.router.navigate(["admin"]);

// }
  // generateId() {
  //   var playerTab = JSON.parse(localStorage.getItem("players") || "[]");
  //   var max = playerTab.length;
  //   for (let i = 0; i < playerTab.length; i++) {
  //     if (max < playerTab.id) {
  //       max = playerTab.id;
  //     }
  //   }
  //   return max;
  // }

  goToEdit(){
    let players = JSON.parse(localStorage.getItem("players") || "[]");
    if (this.id) {
      // Edit Match
      for (let i = 0; i < players.length; i++) {
        if (players[i].id == this.id) {
          players[i] = this.player;
          break;
          
        }
        
        
      }
    } else {
     
      this.player.id = generateId(players);
      players.push(this.player);
      
    
      
    }
    localStorage.setItem("players", JSON.stringify(players));
    // // Navigation to admin
    this.router.navigate(["admin"]);
    
  
    }
    validaite(){
    if (this.id) {
      // Edit Player
      this.playerService.editPlayer(this.player).subscribe(
        (data) =>{
          console.log("Here message after edit", data.message);
          
        }
      
    )} else {
      // Add Player
      this.playerService.addPlayer(this.player).subscribe( (response) =>{
        console.log("Here response", response);
        
      });
    }
    this.router.navigate(["admin"]);

  }
 
  }
  





