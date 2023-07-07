import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router'
import { SignUp, logIn } from '../data-type';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  name: any
  showLoginForm = true;
  constructor(private seller: SellerService, private router: Router, private toaster: ToastrService) { }

  ngOnInit(): void {
    this.seller.reloadSeller()
  }

  passwordMatch() {
    return true
  }

  openLogin() {
    this.showLoginForm = !this.showLoginForm
  }

  signUp(data: any): void {
    this.name = data.Name

    if (data.password != data.confirmpassword) {
      this.toaster.error("Passwords don't match")
    }
    else {
      console.log("data", data);

      let d = {
        name: data.name,
        email: data.email,
        number: data.number,
        password: data.password

      }
      this.seller.userSignUp(d).subscribe((res) => {
        console.log(res);
        if (res) {
          this.toaster.success("Registered successfully!!! Please Login")
        } else {
          this.toaster.error("Database error or User with same email Already exist");
        }
      })
    }

  }

  logIn(data: logIn) {
    console.log(data);
    this.seller.userLogIn(data);
  }
}
