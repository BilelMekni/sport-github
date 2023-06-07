import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ClientsService } from './../../services/clients.service';

@Component({
  selector: 'app-se-connecter',
  templateUrl: './se-connecter.component.html',
  styleUrls: ['./se-connecter.component.css']
})
export class SeConnecterComponent implements OnInit {
  loginForm : FormGroup;
  errorMsg : string;
  id : any;
  client : any;


  constructor( private formBuilder : FormBuilder , private router : Router , private clientService : ClientsService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit() {

    this.loginForm = this.formBuilder.group(
    {
      telephone: ["", [Validators.required]],
      pwd: ["", [Validators.required]],
    }
    )
  
}
  login(){
    this.clientService.login(this.loginForm.value).subscribe(
      (response)=>{
        console.log("Here response after login ", response);
        if (response.msg == "0") {
          // message error
          this.errorMsg = "Please check Telephone/Pwd";
        } else {
          
            this.router.navigate(["clients"]);
          
          // localStorage.setItem("connectedId")
         
          
            
         
          }
        }
    )
      
    

    
  }
  

}

