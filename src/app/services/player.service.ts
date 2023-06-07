import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  playUrl: string = "http://localhost:3000/players";

  constructor(private http:HttpClient) { }
  // Request : Add Player
  // Response : string
  addPlayer(obj : any){
    return this.http.post<{message: string, isAdded: boolean}>(this.playUrl, obj);

  }
  // Request : Edit Player
  // Response : string
  editPlayer(obj : any){
    return this.http.put<{message : string}>(this.playUrl , obj);

  }
  // Request : Get All Players
  // Response : [{}, {}, {} ...]
  getAllPlayers(){
    return this.http.get<{players : any}>(this.playUrl);
  }
    // Request : Get Player By ID
  // Response : {}
  getPlayerById(id: any){
    return this.http.get<{player : string , message : string}>(`${this.playUrl}/${id}`);
  }
  // Request : Delete Player By ID
  // Response : string
  deletePlayer(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.playUrl}/${id}`);
  }

}
