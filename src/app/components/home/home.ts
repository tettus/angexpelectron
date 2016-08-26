import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {EmployeeService} from '../../services/employee-service';
import {MaterializeDirective} from "angular2-materialize";

 import {remote} from 'electron';

const remote = window.require('electron').remote;
@Component({
  selector: 'home',
  pipes: [],
  providers: [EmployeeService],
  directives: [ROUTER_DIRECTIVES,MaterializeDirective],
  styleUrls: ['./home.css'],
  templateUrl: './home.html'
})
export class Home implements OnInit {
  

  routeNames:Array<String>=["employees","admin"];

  constructor(private employeeService:EmployeeService,private route:ActivatedRoute) {
  }

  ngOnInit() {
    console.log("initialized home.ts......  ");
  }

  closeWindow(){
    
  }

}

