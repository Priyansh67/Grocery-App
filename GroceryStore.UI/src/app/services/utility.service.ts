import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor() { }



  cart:any;
  isPresentInCart(id:number): boolean{
    for(let i = 0;i<this.cart.length;i++){
      if(this.cart.product.id === id){
        return true;
      }
    }

    return false;
  }
}
