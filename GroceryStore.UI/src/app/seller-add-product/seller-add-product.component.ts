import { Component } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { Router } from '@angular/router';
import { product } from '../data-type';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent {
  addProductmessage: string | undefined;
  image : any;

  constructor(private product: ProductService, private router: Router,private toaster:ToastrService) { }
  addProduct(data: any) {
    console.log("data.productDiscount",data.productDiscount);
    
    if(!data.productDiscount){
      data.productDiscount = 0
      
    }
    
   // data.ProductImage = this.image;
    console.log(data);
    let d = this.product.addProduct(data).subscribe((result:product[])=>{
         this.router.navigate(['seller-home'])
         console.log("Product add",result);
         this.toaster.success("Product Added Successfully")
         
       });

       console.log(d);
       
  }

  getFile(event:any){
    this.image = event.target.files[0];
  }
}
