import {Component,OnInit} from '@angular/core';
import {MaterializeDirective} from "angular2-materialize";
import {EmployeeModel} from '../models/employee-model';
import {EmployeeService} from '../../services/employee-service';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';


@Component({
  selector: 'add-emp',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES,MaterializeDirective],  
  templateUrl: './add.html'
})

export class AddEmployee {
  public employee:EmployeeModel= new EmployeeModel();
  
  constructor(private employeeService:EmployeeService,private router: Router) {}

   addUser(){
     
     this. employeeService.addEmployee(this.employee).subscribe(result => {
       this.router.navigate(['/home/employees']);  
      });
   }
}


@Component({
  selector: 'list-emp',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES,MaterializeDirective],  
  templateUrl: './employees-list.html'
})

export class EmployeesList implements OnInit {
  public employees: Observable<any>;

  constructor(private employeeService:EmployeeService,private router: Router) {}

   ngOnInit() {   
      this.employees = this.employeeService.getEmployees();
    }

     goToAdd(){
       this.router.navigate(['/home/employees/addEmployee']);
    }
}


@Component({
  selector: 'employee',
  pipes: [],
  providers: [],
  directives: [ROUTER_DIRECTIVES,MaterializeDirective],
  styleUrls: ['./employee.css'],
  templateUrl: './employee.html'
})

export class Employee implements OnInit {
   



   constructor(private employeeService:EmployeeService,private router: Router) {}


  

    ngOnInit() {   
       //to-do
    }

   

}
