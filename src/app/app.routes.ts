import { provideRouter, RouterConfig } from '@angular/router';

import {About} from './components/about/about';
import {Login} from './components/login/login';
import {Home} from './components/home/home';
import {RepoBrowser} from './components/github/repo-browser/repo-browser';
import {RepoList} from './components/github/repo-list/repo-list';
import {RepoDetail} from './components/github/repo-detail/repo-detail';

import {Employee,EmployeesList,AddEmployee} from './components/employee/employee';
 

const routes: RouterConfig = [
  { path: '', redirectTo: 'login', terminal: true },
  { path: 'login', component: Login },  
  { path: 'admin', component: RepoBrowser, children: [
    { path: ':org', component: RepoList, children: [
      { path: ':repo', component: RepoDetail },
      { path: '', component: RepoDetail }
    ]},
    { path: '', component: RepoList}
  ]},
  { path: 'home', component: Home, children: [
    { path: 'employees', component: Employee,children: [     
      { path: ':addEmployee', component: AddEmployee }  ,
      { path: '', component: EmployeesList }      
    ]},
    { path: 'admin', component: About},
    { path: '', component: Employee,children: [          
      { path: '', component: EmployeesList }      
    ]}
  ]}
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
