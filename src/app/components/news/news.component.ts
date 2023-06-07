import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  newsTab:any = [
  {title:"Title1", date: "26/01/2023",author:"Bilel",image:"assets/images/img_1.jpg",avator:"assets/images/person_1.jpg"},
  {title:"Title2", date: "28/01/2023",author:"Aymen",image:"assets/images/img_2.jpg",avator:"assets/images/person_2.jpg"},
  {title:"Title3", date: "30/01/2023",author:"Nihed",image:"assets/images/img_3.jpg",avator:"assets/images/person_4.jpg"},
  {title:"Title4", date: "31/01/2023",author:"Amin",image:"assets/images/img_2.jpg",avator:"assets/images/person_3.jpg"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
