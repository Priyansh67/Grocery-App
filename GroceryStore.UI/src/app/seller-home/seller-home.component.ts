import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent {
constructor(private toaster:ToastrService, private product:ProductService,private route:Router){}

productsList:any;
searchProductList:any;
  categoryproductList: any;
  categoryList: any = null;
  selectedCategory: any = null;

editProductdata:any;

ngOnInit():void{
  this.getProductList();
  this.getCategoryList();
}

getProductList(){
  this.categoryproductList = null;
  this.searchProductList = null;
  this.product.getProducts().subscribe((result)=>{
    console.log(result);
    this.productsList = result;
    
  })
}


getCategoryList() {
  
  this.product.getCategoryList().subscribe((res) => {
    if (res) {
      this.categoryList = res
      console.log(this.categoryList);

    }

  })
}

categorySelected(category: string) {
  console.log(category);
  this.getCategoryList();
  this.selectedCategory = category;

  this.sortProductByCategory(category);
}

sortProductByCategory(category: string) {

  this.searchProductList = null;



  this.categoryproductList = this.productsList.filter((obj: any) => {
    return obj.productCategory == category;
  })

  console.log("categoryproductlist", this.categoryproductList);



}

searchProduct(data:any){
  this.categoryproductList = null;
  let input = data.searchText;
  console.log(input);


  this.searchProductList = this.productsList.filter((obj: any) => {
    return obj.productName.includes(input) || obj.productDescription.includes(input);
  })

  console.log("searchProductList",this.searchProductList);
  
  
}

deleteProduct(id:number){
  console.log("delete",id);
  
  this.product.deleteProduct(id).subscribe((result)=>{

    if(result){
      this.toaster.error("Product deleted")
    }
    console.log(result);
    this.getProductList();
    
  })

  

  
}
}


