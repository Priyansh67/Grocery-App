import { Component } from '@angular/core';
import{Router} from '@angular/router';
import { UserService } from '../services/user.service';
import { ProductService } from '../services/product.service';
import { HomeComponent } from '../home/home.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private toaster:ToastrService, private route:Router, private userService:UserService,private productService:ProductService) {}
  menuType : String = 'default';

  productList:any;
  isCustomerLoggedIn:any;

  cartItems: number| undefined;
  customerData : any;
  customerName : any;

  ngOnInit() : void{
   
   this.cartItems = this.productService.cartItems
  
    this.route.events.subscribe((val:any)=>{

      if(localStorage.getItem('customer')){
        this.isCustomerLoggedIn = true;
       this.customerData = localStorage.getItem('customer');

       if( this.customerData != null){
        this.customerData = JSON.parse(this.customerData)
        this.customerName = this.customerData.name;
        console.log("name",this.customerName);
       }
       console.log("customer data",this.customerData);
       
       
        
      
       }else{
        this.isCustomerLoggedIn = false;
       }    

      if(val.url){
        if(localStorage.getItem('seller') && val.url.includes('seller')){
          this.menuType = 'seller'

        }else{
          this.menuType = 'default'
          
        }
      }
      console.log(val.url);
      
    })
  }

  

  logoutCustomer(){
    localStorage.removeItem('customer')
    this.userService.isCustomerLoggedIn.next(false);
  this.toaster.show ("Logged out!!! ")
    console.log("logout", this.isCustomerLoggedIn);
    
    this.route.navigate(['/']);
  }

  logout(){
    localStorage.removeItem('seller')
    this.toaster.show("Logged out!!! ")
    this.route.navigate(['/']);
  }
}
