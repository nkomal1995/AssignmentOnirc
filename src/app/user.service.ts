import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private uEndpoint ='https://jsonplaceholder.typicode.com/photos';
  private uEndpoint ='https://api.thedogapi.com/v1/breeds';

  constructor(private httpClient: HttpClient) { }

  getUserDetails(){
    return this.httpClient.get(this.uEndpoint);
  }
}
