import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { SellerService } from './services/seller.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})

export class authGuard implements CanActivate{
  constructor(private sellerService:SellerService){}

  canActivate(
    route:ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean{
     
    let role = route.data['role'];

    console.log("role",role);

    if(role == 'seller'){
      if(localStorage.getItem('seller')){
       
        return true;
       }
       return this.sellerService.isSellerLoggesIn;
    }

    if(role == 'customer'){
      if(localStorage.getItem('customer')){
       
        return true;
       }
       return false;
    }

    return false;
    
     
     
    }
    
}

// export const authGuard: CanActivateFn = (route, state) => {
 
//   return true;
// };
