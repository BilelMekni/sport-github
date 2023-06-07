import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

userUrl: string ="http://localhost:3000/users";
  constructor(private HttpClient: HttpClient) { }

  signup(obj: any , img : File){
    let formData = new FormData();
    formData.append("firstName",obj.firstName);
    formData.append("lastName",obj.lastName);
    formData.append("email",obj.email);
    formData.append("pwd",obj.pwd);
    formData.append("role",obj.role);
    formData.append("gender",obj.gender);
    formData.append("img",img);



    return this.HttpClient.post<{message : string , isAdded : boolean}>(`${this.userUrl}/signup`, formData);

  }
  login(user: any){
    return this.HttpClient.post<{msg : String , user:any}>(`${this.userUrl}/login`, user);

  }
  editUser(user: any){
    return this.HttpClient.put(this.userUrl, user);
  }
  getAllUsers(){
    return this.HttpClient.get<{users: any}>(this.userUrl);
  }
  // Request : Delete Player By ID
  // Response : string
  deleteUsers(id: any){
    return this.HttpClient.delete<{isDeleted : boolean}>(`${this.userUrl}/${id}`);
  }
}
