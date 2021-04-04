import { Injectable } from '@angular/core';
import { Product } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[] = [
    { name: 'T Shirt', price: 411.99 }, { name: 'Fit T Shirt', price: 131.50 }, { name: 'Dress Shirt', price: 121.99 },
    { name: 'T Shirt', price: 411.99 }, { name: 'Fit T Shirt', price: 131.50 }, { name: 'Dress Shirt', price: 121.99 },
    { name: 'T Shirt', price: 411.99 }, { name: 'Fit T Shirt', price: 131.50 }, { name: 'Dress Shirt', price: 121.99 },
  ]

  productTypes = [
    { type: 'T Shirts', quantity: 411 }, { type: 'Sweater Shirts', quantity: 131 }, { type: 'Tank Top', quantity: 121 },
  ]


  constructor() { }


  getProducts() {
    return this.products;
  }

  getProductTypes() {
    return this.productTypes;
  }
}
