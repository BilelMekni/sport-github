import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {
  formGroup : FormGroup;
  users:any = [];
  constructor(private router : Router,  private userService : UserService) { }

  ngOnInit() {
    // this.users = getObjectsFromLS("usersSport");
    // this.users.sort((x,y) => x.role.localeCompare(y.role));
    this.getAllUsers();
    console.log("Here users",this.users);
  }

  deleteUsers(id: number){
  this.userService.deleteUsers(id).subscribe(
    (response) =>{
      console.log("here response after delete", response);
      this.getAllUsers();
    }

  );
  }
  // function jamaliya lil code
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (response) => {
        this.users = response.users
      }
    )
  }
 


}
