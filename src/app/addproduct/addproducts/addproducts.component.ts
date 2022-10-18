import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-addproducts',
  templateUrl: './addproducts.component.html',
  styleUrls: ['./addproducts.component.css']
})
export class AddproductsComponent implements OnInit {

  constructor(public _product: ProductsService) { }
  image = '';
  product_name = '';
  info = '';

  prod: any[] = []

  ngOnInit(): void {
  }
  add() {
    const products = {
      image: this.image,
      product_name: this.product_name,
      info: this.info
    }
    this._product.products.push(products);
    localStorage.setItem('products', JSON.stringify(this.prod));
  }

}
