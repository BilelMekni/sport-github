import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit,Input } from '@angular/core';
import { addObject, getObjectsFromLS } from 'src/app/shared/genericFunctions';
import { MustMatch } from 'src/app/validators/mustMatch';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  usersTab: any = [];
  user: any = [];
  imagePreview : any;

// FORM ID
signupForm:FormGroup;
path : string;

  constructor( private formBuilder: FormBuilder , private router : Router,
    private userService : UserService) {
   
   }

  ngOnInit() {
    this.path = this.router.url;
    this.signupForm = this.formBuilder.group(
      {
        firstName:["",[Validators.required,Validators.minLength(3),Validators.maxLength(20)]],
        lastName: ["",[Validators.required,Validators.minLength(5),Validators.maxLength(15)]],
        email: ["",[Validators.required,Validators.email]],
        pwd: ["",[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
        confirmPwd: [""],
        gender : [""],
        img : [""],

      }, {
        validators:MustMatch("pwd" ,"confirmPwd")
      }
    )
  }
// call fn when brn click
  signup(){
    console.log("here object",this.signupForm.value);
    let role = (this.path == "/subscription")? "user" : "admin";
    this.signupForm.value.role = role;
    this.userService.signup(this.signupForm.value,this.signupForm.value.img).subscribe(
      (response) =>{
        console.log("here after signup" ,response);
        
      }
    );
    

  }
  onImageSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.signupForm.patchValue({ img: file });
    this.signupForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
    this.imagePreview = reader.result as string
    };
    reader.readAsDataURL(file);

}
}
