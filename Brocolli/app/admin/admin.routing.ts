/**
 * Created by RIKS on 12/13/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from "./admin.component";
import {AddProductComponent} from "../products/addproduct.component";
import {ProductComponent} from "../products/products.component";

const routes: Routes = [
  { path: 'admin', component: AdminComponent},
  { path: 'admin/addproduct', component: AddProductComponent},
  { path: 'admin/listall', component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
