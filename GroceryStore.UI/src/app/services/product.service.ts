import { Injectable } from '@angular/core';
import { product } from '../data-type';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient, private route:Router) { }

  cartItems = 0;

  addProduct(data:any){

    console.log("prodectservice",data);

    return this.http.post<product[]>('http://localhost:5257/api/Product',data);
    
    // this.http.post('http://localhost:5141/api/Product/product',data,
    // {observe:'response'}).subscribe((result)=>{
    //   this.route.navigate(['seller-home'])
    // })
  }

  deleteProduct(id:number){
    return this.http.delete(`http://localhost:5257/api/Product?id=${id}`);
  }

  updateProduct(id:string,data:product){
    return this.http.put<product[]>(`http://localhost:5257/api/Product/product/${id}`,data);
  }
  getProducts(){
    return this.http.get<product[]>('http://localhost:5257/api/Product/GetProduct');
  }

  getProductById(id:string){
    return this.http.get<product>(`http://localhost:5257/api/Product/product/${id}`);
  }

  addToCart(data:any){
    console.log("Service",data);
    this.cartItems++;
    return this.http.post('http://localhost:5257/api/Cart/cart',data);
    
  }
  getCategoryList(){
    return this.http.get('http://localhost:5257/api/Product/Category');
  }

  removeFromCart(id:number){
    return this.http.delete(`http://localhost:5257/api/Cart/cart?id=${id}`);
  }

  PlaceOrder(data:any){
    return this.http.post('http://localhost:5257/api/Order/order',data);
  }

  GetOrderDetails(id:any){
    return this.http.get(`http://localhost:5257/api/Order/order/${id}`);
  }

  getCartItems(id:any){
    
    return this.http.get(`http://localhost:5257/api/Cart/cart/${id}`);
  }

  deleteAllFromCart(id:number){
    console.log("emptyCart called");
    
    return this.http.delete(`http://localhost:5257/api/Cart/cart/customer?id=${id}`)
  }

  getReviews(id:number){
    console.log("id",id);
    
    return this.http.get(`http://localhost:5257/api/Product/review/${id}`);
  }

  addReview(data:any){
    return this.http.post('http://localhost:5257/api/Product/review',data);
  }

  modifyProductQuantity(id:string, quantity:number){
    console.log("modifyProductQuantity" ,id, quantity);
   
    return this.http.get<product>(`http://localhost:5257/api/Order/order/${id}/${quantity}`);
   
  }


}
