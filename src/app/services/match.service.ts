import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {

  matchUrl: string = "http://localhost:3000/matches";
  constructor( private http:HttpClient ) { }
  // Request : Add Match
  // Response : string
  addMatch(obj: any){
  return this.http.post<{message: string, isAdded: boolean}>(this.matchUrl, obj);
  }
  // Request : Edit Match
  // Response : string
  editMatch(obj: any){
   return this.http.put<{message : string}>(this.matchUrl, obj);
  }
  // Request : Get All Matches
  // Response : [{}, {}, {} ...]
  getAllMatches(){
  return this.http.get<{matches : any}>(this.matchUrl);
  }
  // Request : Get Match By ID
  // Response : {}
  getMatchById(id: any){
    return this.http.get<{match :string,  message : string}>(`${this.matchUrl}/${id}`);
  }
  // Request : Delete Match By ID
  // Response : string
  deleteMatch(id: any){
    return this.http.delete<{isDeleted : boolean}>(`${this.matchUrl}/${id}`);
  }
  deleteAll(id : any){
    return this.http.post<{isDeleted: Boolean }>(this.matchUrl, id);
  }
  // Request : Search matches by score one or score two
  // Response
  searchByScores(obj : any){
    return this.http.post<{matches : any}>(`${this.matchUrl}/search`,obj);
  }

  // chat matches
  addComment(obj:any){
    return this.http.post<{match : string}>(`${this.matchUrl}/comment`,obj);
  }
}
