import { Injectable } from '@angular/core';
import { SignUp, logIn } from '../data-type';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient, private route:Router) { }
  isCustomerLoggedIn = new BehaviorSubject<boolean>(false);
  

  signIn(data: any){
      return this.http.post('http://localhost:5257/api/Customer',data);
  }

  logIn(data:logIn){
    return this.http.post('http://localhost:5257/api/Customer/login',data);
  }
}
