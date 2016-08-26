import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Router,ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../services/employee-service';
 import {EmployeeModel} from '../models/employee-model';

 import {MaterializeDirective} from "angular2-materialize";

@Component({
  selector: 'login',
  pipes: [],
  providers: [EmployeeService],
  directives: [ROUTER_DIRECTIVES,MaterializeDirective],   
  styleUrls: ['./login.css'],
  templateUrl: './login.html'
})
export class Login  {
  
  user: EmployeeModel= new EmployeeModel();
  message:String;
  constructor( private router: Router,private employeeService:EmployeeService) {
  }

   login(email: string,password:string) {
    /*this.userservice.getUser(email)
      .subscribe(result => {
        console.log(" Result user"+result);
         if(result===null){
             this.message="User not configured,please contact admin";
         }else if(result.password!=password){
            this.message="User and password wrong.";
         }else{
                this.router.navigate(['/home']);
         }
      });*/
                      this.router.navigate(['/home']);

  }
}

