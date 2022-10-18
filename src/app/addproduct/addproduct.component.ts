import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  image = '';
  product_name = '';
  info = '';

  prod: any[] = []

  constructor(public _product:ProductsService,private _route:Router) { }

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
    alert('successfully added products');
    this._route.navigate(['/home','addproduct'])
  }
}
