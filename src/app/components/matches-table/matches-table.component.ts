import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatchService } from 'src/app/services/match.service';

@Component({
  selector: 'app-matches-table',
  templateUrl: './matches-table.component.html',
  styleUrls: ['./matches-table.component.css']
})
export class MatchesTableComponent implements OnInit {

  matches: any = [];
  pageOfItems: Array<any>;

  constructor(private router : Router,
    private matchService : MatchService) { }

  ngOnInit() {
    // this.matches = JSON.parse(localStorage.getItem("matches") || "[]");
    this.matchService.getAllMatches().subscribe(
      (response) => {
        this.matches = response.matches
      }
    );

    console.log("Here matches",this.matches);
    
  }
  // modifier
  goToEdit(id: number){
   
    this.router.navigate([`editMatch/${id}`]);
  }
// go to dispaly
  goToDisplay(id: number){
    this.router.navigate([`matchsInfo/${id}`]);
  }
  // delete from ls
  deleteMatches(id: any) {
 this.matchService.deleteMatch(id).subscribe(
  (response) => {
    console.log("Here response after delete", response);
    this.getAllMatches();
  }
 );


  }
  deleteAll(id : number){
    
  this.matchService.deleteAll(id).subscribe(
    (response)=>{
      console.log("here response after delete",response);
      
    }
  );
    
  }
  // function tbargicha imta3 code
  getAllMatches(){
    this.matchService.getAllMatches().subscribe(
      (response) => {
        this.matches = response.matches;
      }
    )
  }
  onChangePage(pageOfItems: Array<any>) {
    // update current page of items
    this.pageOfItems = pageOfItems;
    }

}
