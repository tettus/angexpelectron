import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import {EmployeeModel} from '../components/models/employee-model';


@Injectable()
export class EmployeeService {
  constructor(private http: Http) {}

  getEmployees() {
    return this.makeRequest('employees');
  }

  getEmployee(employeeId:string){
    return this.makeRequest(`employee/${employeeId}`);
  }

  addEmployee(emp:EmployeeModel){
    return this.postRequest("employee",emp);
  }



  private postRequest(path:string, params:Object){
     let url = `http://localhost:3000/${ path }`;
     console.log(" Post Request ...."+params);
    return this.http.post(url,params) .map((res) => res.json());
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `http://localhost:3000/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
