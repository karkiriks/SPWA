import {Component} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
/**
 * Created by RIKS on 12/13/16.
 */
@Component({
  selector: 'shoes',
  templateUrl: 'app/products/products.component.html',
})
export class ShoesComponent{

  productCategory: string;
  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getShoes();
  }

  getShoes(): void{
    this.productCategory = "Shoes";
    this.productService.getProducts()
      .then(products => this.products = products);
    // this.productService.getProducts()
    //   .subscribe((data: Product[]) => this.products = data,
    //     error => console.log(error),
    //     () => console.log('Get Shoes Finished'));
  }
}
