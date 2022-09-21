import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private auth:AuthService,
    private route:Router) { }

  ngOnInit(): void {
  }
  islogin = this.auth.islogin;
  // usName = this.auth.user;

 


  onLogout(){
    alert("logout sucessfully");
    localStorage.removeItem('auth');
    this.route.navigate(['login']);
    this.auth.islogin = false;
  
  
    
  }

}
