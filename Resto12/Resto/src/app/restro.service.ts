import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestroService {
  public data:any;
  constructor(private http:HttpClient) { }

   url="http://localhost:3000/restaurants";

  getList(){
   
    return this.http.get(`http://localhost:3000/restaurants`);
    
  }

  saveRestro(data){
    return this.http.post(this.url,data);
  }

  deleteRestro(id){
    return this.http.delete(`${this.url}/${id}`);
  }

  getCurrentRestro(id){

    return this.http.get(`${this.url}/${id}`);
  }
}
