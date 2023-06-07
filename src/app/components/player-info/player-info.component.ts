import { getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-info',
  templateUrl: './player-info.component.html',
  styleUrls: ['./player-info.component.css']
})
export class PlayerInfoComponent implements OnInit {

id : any;
player : any = {};
  constructor(private activatedRoute : ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    let players = getObjectsFromLS("players");
    this.player = players.find((obj:any) => {return obj.id == this.id});
  }

}
