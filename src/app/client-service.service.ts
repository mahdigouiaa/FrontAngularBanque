import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  basePath = 'http://localhost:8080/client/'
  constructor(private http:HttpClient) { }

  getAllClients(){
    return this.http.get(this.basePath+'all')
  }

  deleteClient(id){
    return this.http.delete(this.basePath+'delete/'+id)
  }

  getClientById(id){
    return this.http.get(this.basePath+'delete/'+id)
  }
}
