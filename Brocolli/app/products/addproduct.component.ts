import {Component} from "@angular/core";
import {Router} from "@angular/router";
import {ProductService} from "./product.service";
/**
 * Created by RIKS on 12/21/16.
 */


@Component({
  selector: 'add-product',
  templateUrl: 'app/products/addproduct.component.html',
})
export class AddProductComponent{

  constructor(private router: Router,
  private productService: ProductService){}

  addProductToList(): void {
    let link = ['/admin/listall'];
    // this.productService.addProduct();
    alert('product added to list');
    this.router.navigate(link);
  }

}
