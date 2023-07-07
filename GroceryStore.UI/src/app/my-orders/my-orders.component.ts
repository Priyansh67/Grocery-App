import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent {

  orderList : any;
  constructor(private productService:ProductService){}
  currentCustomerId:number|undefined; 

  ngOnInit(){
    this.getCurrentOrders()
  }

  getCurrentOrders(){

    const format = 'dd/MM/yyyy';
    const locale = 'en-US';
    let customer = localStorage.getItem('customer');
    if (customer != null) {
      let ncustomer = JSON.parse(customer);
   
      this.currentCustomerId = ncustomer.id;
    }

    this.productService.GetOrderDetails(this.currentCustomerId).subscribe((result)=>{
      this.orderList = result;
      console.log("orders",this.orderList);

      for(let i=0;i<this.orderList.length;i++){
        
        this.orderList[i].date = formatDate(this.orderList[i].date,format,locale)
        let data = JSON.parse(this.orderList[i].products);
        console.log(data);
        
        this.orderList[i].products = data;
        console.log("product list", this.orderList[i].products);

        for(let j=0; j<this.orderList[i].products.length;j++){
         if(typeof(this.orderList[i].products[j].product) == 'string'){
          
          let d = JSON.parse(this.orderList[i].products[j].product);
          this.orderList[i].products[j].product = d;
         }
          
          
        }
      }



      console.log("updated Orderlist", this.orderList);
      
      
    })
    
  }
}
