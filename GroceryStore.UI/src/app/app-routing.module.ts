import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { authGuard } from './auth.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { HttpClientModule } from '@angular/common/http'; 
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'seller', component:SellerAuthComponent},
  {path:'login', component:UserAuthComponent},
  {path:'seller-add-product', component:SellerAddProductComponent,canActivate:[authGuard], data:{role:'seller'}},
  {path:'seller-update-product/:id',component:SellerUpdateProductComponent, canActivate:[authGuard], data:{role:'seller'}},
  {path:'seller-home',component:SellerHomeComponent, canActivate:[authGuard], data:{role:'seller'}},
  {path:'product-details/:id', component:ProductDetailsComponent},
  {path:'cart', component:CartComponent ,canActivate:[authGuard], data:{role:'customer'}},
  {path:'orders', component:MyOrdersComponent,canActivate:[authGuard], data:{role:'customer'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
