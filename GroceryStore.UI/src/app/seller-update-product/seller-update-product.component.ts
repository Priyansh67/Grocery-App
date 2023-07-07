import { Component, Input } from '@angular/core';
import { product } from '../data-type';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent {

  productData:any;
  productId:any;
 constructor(private toaster:ToastrService, private route:ActivatedRoute, private productService:ProductService,private router:Router){}

 ngOnInit():void{
  let id = this.route.snapshot.paramMap.get('id')
  console.log(id);
  id && this.productService.getProductById(id).subscribe((data)=>{
    console.log(data);
    this.productData = data;
    this.productId = id;
  });
  
 }

  updateProduct(data:any){
    console.log("dataupdate",data);
    if(!data.productDiscount){
      data.productDiscount = 0
      
    }
    
    this.productService.updateProduct(this.productId,data).subscribe((result)=>{
      console.log(result);
      this.router.navigate(['seller-home']);
      this.toaster.success("Product Updated Successfully")
      
    })
  }
}
