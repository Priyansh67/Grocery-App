import { Component, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { product } from '../data-type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private product: ProductService, private route: Router) { }
  selectedCategory: any = null;

  searchProductList:any;
  categoryproductList: any;
  productsList: any;
  categoryList: any = null;
  isCustomerLoggedIn = false;
  addToCart(id: any) {

  }

  ngOnInit(): void {

    this.getProductList();
    this.getCategoryList();
    this.route.events.subscribe((val: any) => {
      if (localStorage.getItem('customer')) {
        this.isCustomerLoggedIn = true;
      } else {
        this.isCustomerLoggedIn = false;
      }
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

  getProductList() {
    this.categoryproductList = null;
    this.searchProductList = null;
    this.product.getProducts().subscribe((result) => {
      console.log(result);
      this.productsList = result;
      let str = JSON.stringify(this.productsList)
      console.log("json", str);

    })



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

}
