import { Component, OnInit } from '@angular/core';
import { ClientsService } from 'src/app/services/clients.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients:any;

  constructor( private clientsService : ClientsService, private router : Router,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {
    
   this.clientsService.getAllClients().subscribe(
    (response)=>{
this.clients = response.clients;
    }
   )
  }
  updateClient(id : any){
    this.router.navigate([`modifierClient/${id}`]);

}

}
