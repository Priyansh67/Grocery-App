import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { SignUp, logIn, product } from '../data-type';
import { BehaviorSubject, Observable } from 'rxjs';
import {Router} from '@angular/router'
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class SellerService {
isSellerLoggesIn = new BehaviorSubject<boolean>(false)
  constructor(private http:HttpClient, private route:Router,private toaster: ToastrService) { }

  

  userSignUp(data:any){
    console.log("seller service",data);
    
    console.log("works");
   return this.http.post('http://localhost:5257/api/Admin',data);
   
   
  }

  userLogIn(data:logIn){
    console.log("service",data);
 
    
   this.http.post('http://localhost:5257/api/Admin/login',data
   
   ,{observe:'response'}).subscribe((result:any)=>{
    console.log("loginResult",result);

    if(result && result.body && result.body.password == data.Password){
      this.toaster.success("Logged In successfully")
      this.isSellerLoggesIn.next(true);
      localStorage.setItem('seller',JSON.stringify(result.body))
      this.route.navigate(['seller-home'])
    }
    else {
     this.toaster.error("Wrong Credentials or User don't exist");
    }});
  
  }

  reloadSeller(){
    if(localStorage.getItem('seller')){
      this.isSellerLoggesIn.next(true);
      this.route.navigate(['seller-home']);
    }
  }
}
