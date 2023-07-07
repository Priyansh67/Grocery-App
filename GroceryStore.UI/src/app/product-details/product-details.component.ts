import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Toast, ToastrService } from 'ngx-toastr';
import { UtilityService } from '../services/utility.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  product: any;
  isCustomerLoggedIn = false;
  quantityToBuy = 1;
  customerDetails: any;
  reviewList: any;
  cartItems: any;

  productId: any;
  constructor(
    private toaster: ToastrService,
    private utilityService: UtilityService,
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      console.log('customer details', localStorage.getItem('customer'));
      var data = localStorage.getItem('customer');

      if (data != null) {
        this.customerDetails = JSON.parse(data);
        console.log('customer details', this.customerDetails);

        this.isCustomerLoggedIn = true;
      } else {
        this.isCustomerLoggedIn = false;
      }
    });
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    id &&
      this.productService.getProductById(id).subscribe((data) => {
        console.log(data);

        this.product = data;
        this.productId = id;
      });

    id && this.getReviews(id);
  }

  handleQuantity(input: string) {
    if (input == 'min' && this.quantityToBuy > 1) {
      this.quantityToBuy -= 1;
    } else if (
      input == 'max' &&
      this.quantityToBuy < this.product.productQuantity
    ) {
      this.quantityToBuy += 1;
    }
  }

  getUserCart() {
    let isItemPresent = false;
    this.productService
      .getCartItems(this.customerDetails.id)
      .subscribe((result) => {
        if (result) {
          this.cartItems = result;
          console.log('product details cart', this.cartItems);

          for (let i = 0; i < this.cartItems.length; i++) {
            let product = JSON.parse(this.cartItems[i].product);
            console.log('Details product id', product);
            console.log('Item wanted to add in cart', this.productId);

            if (this.productId == product.id) {
              isItemPresent = true;
            }
          }

          if (isItemPresent) {
            this.toaster.error('Item Already present in cart.');
          } else {
            this.addToCart();
          }
        }
      });
  }

  addToCart() {
    let customer = localStorage.getItem('customer');
    console.log(JSON.stringify(localStorage.getItem('customer')));
    let id;

    if (customer != null) {
      let ncustomer = JSON.parse(customer);
      id = ncustomer.id;
    }

    let data = {
      product: JSON.stringify(this.product),
      customerId: id,
      productQuantity: this.quantityToBuy,
      date: new Date(),
    };

    this.productService.addToCart(data).subscribe((result) => {
      if (result) {
        console.log('result', result);
        this.toaster.success('Item added to cart successfully');
      }
    });
  }

  getReviews(id: any) {
    const format = 'dd/MM/yyyy';
    const myDate = '2019-06-29';
    const locale = 'en-US';
    const formattedDate = formatDate(myDate, format, locale);

    this.productService.getReviews(id).subscribe((result) => {
      this.reviewList = result;
      console.log('review', result);

      for (let i = 0; i < this.reviewList.length; i++) {
        this.reviewList[i].date = formatDate(
          this.reviewList[i].date,
          format,
          locale
        );
      }
    });
  }

  addReview(review: any) {
    console.log(this.customerDetails);

    let data = {
      date: new Date(),
      reviewdata: review.productReview,
      name: this.customerDetails.name,
      productId: this.productId,
    };

    console.log('reviewdata', data);
    this.productService.addReview(data).subscribe((result) => {
      console.log(result);
      this.toaster.success('Review added successfully');
      this.getReviews(this.productId);
    });
  }
}
