import { Component } from '@angular/core';
import {Product} from "./products/product";
import {ProductService} from "./products/product.service";
/**
 * Created by RIKS on 12/12/16.
 */
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.home.html',

})
export class HomeComponent  {
  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.productService.getProducts().then(products => this.products = products);
  }

//   getLatest(){
//     this.productService.getProducts()
//       .subscribe((data: Product[]) => this.products = data,
//         error => console.log(error),
//         () => console.log('Get Products Finished'));
// }
//
//   getFeatured(): void{
//     this.productService.getProducts()
//       .subscribe((data: Product[]) => this.products = data,
//         error => console.log(error),
//         () => console.log('Get Products Finished'));

}
