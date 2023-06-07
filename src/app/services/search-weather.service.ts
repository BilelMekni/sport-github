import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchWeatherService {
  weatherUrl : string = "http://localhost:3000/weather";

  constructor( private http: HttpClient) { }
  search(obj : any){
    // return this.http.post<{result : any}>(this.weatherUrl, obj);
    return this.http.get<{result : any}>(`${this.weatherUrl}/${JSON.stringify(obj)}`)
  }
}
