import {Component} from "@angular/core";
import {Product} from "../product";
import {ProductService} from "../product.service";
/**
 * Created by RIKS on 12/13/16.
 */
@Component({
  selector: 'top',
  templateUrl: 'app/products/products.component.html',
})
export class TopComponent{

  productCategory: string;
  products: Product[];

  constructor(private productService: ProductService){}

  ngOnInit(): void {
    this.getTop();
  }

  getTop(): void{
    this.productCategory = "Tops";
    this.productService.getProducts()
      .then(products => this.products = products);
    // this.productService.getProducts()
    //   .subscribe((data: Product[]) => this.products = data,
    //     error => console.log(error),
    //     () => console.log('Get Tops Finished'));
  }
}
