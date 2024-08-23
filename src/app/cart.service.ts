import { Injectable } from '@angular/core';
import { IProduct } from './product-details/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  cart: IProduct[] = []

  add(product : IProduct){
    this.cart.push(product)
    console.log(`This product ${product.name} was added.`)
  }
}
