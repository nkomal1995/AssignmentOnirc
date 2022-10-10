import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetEmployee } from '../store/action/employee.action';
import { EmployeeState } from '../store/state/employee.state';
import {UserService} from '../user.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts:any;
  breedSearch:string = '';
  
  @Select(EmployeeState.getEmployeeList) post:Observable<any>;
  @Select(EmployeeState.getEmployeeLo emploaded:Observable<boolean>;
  
  constructor(private user: UserService, private store:Store) { }

  ngOnInit(): void {

    // this.user.getUserDetails()
    // .subscribe(response => {
    //   this.posts = response;
    //   console.log(this.posts);
    // });
      this.post.subscribe(res=>{
        console.log(res);
        this.posts = res;
      }
        )
       

     this.store.dispatch( new GetEmployee());
    
  }

}
