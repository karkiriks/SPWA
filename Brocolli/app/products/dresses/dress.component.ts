import {Component, OnInit} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
/**
 * Created by RIKS on 12/13/16.
 */
@Component({
  selector: 'dresses',
  templateUrl: 'app/products/products.component.html',
})
export class DressComponent implements OnInit{

  productCategory: string;
  products: Product[];

 constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getDresses();
  }

  getDresses(): void{
   this.productCategory = "Dresses";
    this.productService.getProducts()
      .then(products => this.products = products);
    // this.productService.getProducts()
    //   .subscribe((data: Product[]) => this.products = data,
    //     error => console.log(error),
    //     () => console.log('Get Dresses Finished'));
  }

}
