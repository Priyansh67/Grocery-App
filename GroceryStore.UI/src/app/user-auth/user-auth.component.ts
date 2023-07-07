import { Component } from '@angular/core';
import { SignUp, logIn } from '../data-type';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-auth',
  templateUrl: './user-auth.component.html',
  styleUrls: ['./user-auth.component.css']
})
export class UserAuthComponent {
 constructor(private toaster:ToastrService, private userService:UserService, private route:Router){}
  showLoginForm = true;

  

  signUp(data: any){

    console.log("signup",data);
    

    if(data.password != data.confirmpassword){
      this.toaster.error("Passwords don't match");
    }

    else{
      let d = {
        name : data.name,
        email : data.email,
        number : data.number,
        password : data.password

      }
      console.log("modified data", d);
      
      this.userService.signIn(d).subscribe((result:any)=>{

        if(result){
          this.toaster.success("User registered Successfully")
        }else{
          this.toaster.error("Registration Failed, User with same email already exist");
        }
       
      });
    }
    
    
  }

  logIn(data : logIn){
    this.userService.logIn(data).subscribe((result:any)=>{
      console.log("customerlogin", result);
      
      if(result&& result.password == data.Password){
        this.userService.isCustomerLoggedIn.next(true);
        localStorage.setItem('customer',JSON.stringify(result))
        this.route.navigate([''])
        this.toaster.success("User Log In Successfully")
      }
      else{
       this.toaster.error("Wrong Credentials")
      }
    })

  }

  openLogin(){
    this.showLoginForm = !this.showLoginForm;
  }
}
