import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  matchObj:any = {teamOne:"FCB" , teamTwo:"RMD" ,scoreOne:2,scoreTwo:2}
  constructor() { }

  ngOnInit() {
  }

}
