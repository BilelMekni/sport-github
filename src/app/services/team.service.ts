import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamUrl: string = "http://localhost:3000/teams";

  constructor(private http:HttpClient) { }
  // Request : Add Player
  // Response : string
  addTeam(obj : any){
    return this.http.post<{message: string, isAdded: boolean}>(this.teamUrl, obj);

  }
  // Request : Edit Player
  // Response : string
  editTeam(obj : any){
    return this.http.put(this.teamUrl , obj);

  }
  // Request : Get All Players
  // Response : [{}, {}, {} ...]
  getAllTeams(){
    return this.http.get<{teams : any}>(this.teamUrl);
   
  }
    // Request : Get Player By ID
  // Response : {}
  getTeamById(id: any){
    return this.http.get(`${this.teamUrl}/${id}`);
  }
  // Request : Delete Player By ID
  // Response : string
  deleteTeam(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.teamUrl}/${id}`);
  }

  searchFromAPIByCountry(obj){
return this.http.post(this.teamUrl,obj);
  }
}
