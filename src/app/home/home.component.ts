import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  breedSearch:string = '';
  constructor(private user: UserService) { }

  ngOnInit(): void {

    this.user.getUserDetails()
    .subscribe(response => {
      this.posts = response;
      console.log(this.posts);
    });
    
  }

}
