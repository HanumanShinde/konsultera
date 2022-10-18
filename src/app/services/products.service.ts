import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products=[{
    image:"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-500x500.jpg",
    product_name:'MacBook',
    info:'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..'
  },
{
  image:"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
    product_name:'iPhone',
    info:'iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..'
},
{
  image:"https://demo.opencart.com/image/cache/catalog/demo/apple_cinema_30-200x200.jpg",
  product_name:'Apple Cinema 30"',
    info:'The 30-inch Apple Cinema HD Display delivers an amazing 2560 x 1600 pixel resolution. Designed sp..'
},
{
  image:"https://demo.opencart.com/image/cache/catalog/demo/canon_eos_5d_1-200x200.jpg",
  product_name:'Canon EOS 5D',
    info:'Canons press material for the EOS 5D states that it defines (a) new D-SLR category, while we'
},
{
  image:"https://demo.opencart.com/image/cache/catalog/demo/iphone_1-200x200.jpg",
    product_name:'Canon EOS 5D',
    info:'iPhone is a revolutionary new mobile phone that allows you to make a call by simply tapping a nam..'
},
{
  image:"https://demo.opencart.com/image/cache/catalog/demo/macbook_1-500x500.jpg",
  product_name:'MacBook',
  info:'Intel Core 2 Duo processor Powered by an Intel Core 2 Duo processor at speeds up to 2.1..'
}
]


  constructor() { }
}
