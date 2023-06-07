import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // format Id
  loginForm: FormGroup;
  errorMsg: any;


  constructor(private formBuilder: FormBuilder, private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group(
      {
        email: ["", [Validators.required, Validators.email]],
        pwd: ["", [Validators.required]],
      }
    )
  }
  login() {
    this.userService.login(this.loginForm.value).subscribe(
      (response) => {
        console.log("Here response after login ", response);
        if (response.msg != "2") {
          // message error
          this.errorMsg = "Please check Email/Pwd";
        } else {
          // localStorage.setItem("connectedId")
          localStorage.setItem("connectedUser",response.user.id);
          if (response.user.role == "user") {
            this.router.navigate([""]);
          } else {
            this.router.navigate(["admin"]);
          }
        }

      }
    );
  }

}
