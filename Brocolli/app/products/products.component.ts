import {Component, OnInit} from "@angular/core";
import {ProductService} from "./product.service";
import {Product} from "./product";
/**
 * Created by RIKS on 12/12/16.
 */

@Component({
  selector: 'my-products',
  templateUrl: 'app/products/products.component.html',
  providers: [ProductService]
})
export class ProductComponent implements OnInit{

  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private productService: ProductService){}

  getProducts(): void {
    this.productService.getProducts()
      .then(products => this.products = products);
  }


}
