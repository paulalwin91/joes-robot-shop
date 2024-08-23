import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from './product.model';



@Component({
  selector: 'bot-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  cart: IProduct[] = [];
  
  @Input() productDets!: IProduct;
  @Output() buyMe = new EventEmitter();



  getDiscountedClasses(product: IProduct) {
    if (product.discount > 0)
      return 'strikeMeBitch bold'
    else
      return ''
  }

  buyMeClick(product: IProduct) {    
    this.buyMe.emit()    
  }


  getImageUrl(product: IProduct) {

    if (!(product === null))
      return '/assets/images/robot-parts/' + product.imageName
    else
      return ''
  }

}
