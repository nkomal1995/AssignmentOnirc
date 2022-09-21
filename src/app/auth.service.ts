import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  islogin!: boolean;
  user:string | undefined;
  constructor() { }


  authUser(users:any){
    let userArr = [];
     this.user=users.userName.value;
 
    let data ={
     
      password:"admin"
    }
    this.islogin=true;
    localStorage.setItem('auth', JSON.stringify(data));
 
    if(localStorage.getItem('auth')){
      userArr = JSON.parse(localStorage.getItem('auth') || "");
      console.log(userArr);
      
    }
  
    const value =  userArr.password === users.password.value;
    console.log(value);
    return value;


  }
  logout(){

  this.islogin=false;

  }
}
