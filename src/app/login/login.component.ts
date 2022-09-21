import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
  }


  myForm = new FormGroup({
    userName: new FormControl('',Validators.email),
    password: new FormControl(''),
  });


  login(){

   const user =this.authService.authUser(this.myForm.controls);
   if(user){
    console.log("login sucessfully");
    alert("login sucessfully");
    this.route.navigate(['/','home']);
    
   }

   else{
    alert("Please enter right credential");
     }
    
   }


}
