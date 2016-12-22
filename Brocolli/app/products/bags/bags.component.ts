import {Component} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
/**
 * Created by RIKS on 12/13/16.
 */
@Component({
  selector: 'bags',
  templateUrl: 'app/products/products.component.html',
})
export class BagsComponent{

  productCategory: string;
  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getBags();
  }

  getBags(): void{
    this.productCategory = "Bags";
    this.productService.getProducts()
      .then(products => this.products = products);
    // this.productService.getProducts()
    //   .subscribe((data: Product[]) => this.products = data,
    //     error => console.log(error),
    //     () => console.log('Get Bags Finished'));
  }

}
