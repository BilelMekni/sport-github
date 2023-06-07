import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

   articles: any =[
    {title:"Title A",date:"22/01/2023",description:"hello",image:"assets/images/img_1.jpg"},
    {title:"Title B",date:"22/01/2023",description:"hello",image:"assets/images/img_2.jpg"},
    {title:"Title C",date:"22/01/2023",description:"hello",image:"assets/images/img_3.jpg"},
    {title:"Title D",date:"22/01/2023",description:"hello",image:"assets/images/img_2.jpg"},
    {title:"Title E",date:"22/01/2023",description:"hello",image:"assets/images/img_1.jpg"},
    {title:"Title F",date:"22/01/2023",description:"hello",image:"assets/images/img_3.jpg"},
   ];

  constructor() { }

  ngOnInit() {
  }

}
