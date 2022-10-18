import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  myIndex = -1;
  constructor(public _product: ProductsService,
    private _route: Router, private _router: ActivatedRoute) { }

  ngOnInit(): void {
    this._router.params.subscribe(data => {
      this.myIndex = data['index'];
    })
  }

  delete() {
    if (confirm('are you sure?')) {
      delete this._product.products[this.myIndex];
      this._product.products.splice(this.myIndex, 1);
      //  this._product.storeInDB();
      this._route.navigate(['/app', 'home']);
    }
  }

}
