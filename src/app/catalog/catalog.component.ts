import { Component } from '@angular/core';
import { IProduct } from '../product-details/product.model';
import { CartService } from '../cart/cart.service';
import { ProductService } from './product.service';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'bot-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']  
})
export class CatalogComponent {
  products!: IProduct[];
  filter: string;


  constructor(private cartSvc: CartService, private prodSvc : ProductService, private router: Router ) {    
    this.filter = ''
  }

  ngOnInit(){
    this.prodSvc.getProducts().subscribe((prods) =>{
        this.products = prods
    });
  }

  addToCart(product: IProduct) {
    this.cartSvc.add(product);
    this.router.navigate(['/cart'])
  }

  getFilteredProducts() {
    return this.filter === '' ? this.products : this.products.filter(p => !(p === null) && p.category === this.filter);
  }
}
