import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { UtilityService } from '../services/utility.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent {
  constructor(private utilityService:UtilityService, private productService: ProductService, private toaster:ToastrService) { }
  userCart: any;
  totalItems = 0;
  totalAmount = 0;
  productList: any;
  productsToModify:any = [];


  ngOnInit() {
    this.getCartItems();
  }

  currentCustomerId = 0;

  getCartItems() {

    let customer = localStorage.getItem('customer');
    console.log(JSON.stringify(localStorage.getItem('customer')));
    let id;

    if (customer != null) {
      let ncustomer = JSON.parse(customer);
      id = ncustomer.id;
      this.currentCustomerId = id;
    }


    this.productService.getCartItems(id).subscribe((result) => {
      this.userCart = result;
      
      console.log(result);

      console.log("cart", this.userCart);
      this.totalItems = this.userCart.length;

      this.totalAmount = this.getTotalAmount();

      console.log("cart updated", this.userCart);

    });
  }

  getTotalAmount(): number {

    let amount = 0;
    for (let i = 0; i < this.userCart.length; i++) {
      let data = this.userCart[i].product;
      data = JSON.parse(data);
      this.userCart[i].product = data;
      amount += (data.productPrice-data.productDiscount) * this.userCart[i].productQuantity;
      console.log();

    }
    return amount;
  }

  removeFromCart(id:number){
    this.productService.removeFromCart(id).subscribe((result)=>{
      console.log(result);
      this.getCartItems();
      this.toaster.error("Item removed from Cart")
      
    });
    
  }

  emptyCart(id:number){
    this.productService.deleteAllFromCart(id).subscribe((result)=>{
      console.log(result);
      this.getCartItems();
      
     });
  }

  testOrder(){

    

    for(let i = 0;i<this.userCart.length;i++){
      
      let  productId = this.userCart[i].product.id
      let  productQuantity = this.userCart[i].productQuantity
      
      this.productService.modifyProductQuantity(productId,productQuantity).subscribe((result)=>{
        console.log(result);
        
      })
     
    }

    this.Order();
    
  }


  Order() {
    console.log("User cart order time", this.userCart);
    
    let data = {
      date: new Date(),
      amount: this.totalAmount,
      products: JSON.stringify(this.userCart),
      customerId: this.currentCustomerId
    }

    console.log(data);

    this.productService.PlaceOrder(data).subscribe((result) => {
      console.log("order",result);
      if(result){

        

        this.emptyCart(this.currentCustomerId)
              this.toaster.success("Ordered Successfully");
        
      }

    })

    


   
  }
}
