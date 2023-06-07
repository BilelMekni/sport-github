import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  clientUrl: string ="http://localhost:3000/clients";

  constructor( private HttpClient : HttpClient) { }
  login(client: any){
    return this.HttpClient.post<{msg : string}>(`${this.clientUrl}/login`, client);

  }
  inscrire(obj : any ){
   
    return this.HttpClient.post<{message : string , isAdded : boolean}>(`${this.clientUrl}/inscrire`,obj);

  }
  getAllClients(){
    return this.HttpClient.get<{clients: any}>(this.clientUrl);
  }
  getClientById(id: any){
    return this.HttpClient.get<{client : string , message : string}>(`${this.clientUrl}/${id}`);
  }
  editClient(client : any){
    
      return this.HttpClient.put<{ message: string }>(this.clientUrl, client);
  }
}
