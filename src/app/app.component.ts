import { Component, OnInit } from '@angular/core';
import { Product, ProductType } from 'src/app/models';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  productTypes = new Array<ProductType>();
  products = new Array<Product>();

  ngOnInit() {
    this.productTypes = this.productService.getProductTypes();

    this.products = this.productService.getProducts();
  }

  constructor(private productService: ProductService) {}


  onProductSelected(event) {
    console.log(event);
  }
}
