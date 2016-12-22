/**
 * Created by RIKS on 12/13/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ShoesComponent} from "./shoes.component";

const routes: Routes = [
  { path: 'products/shoes', component: ShoesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShoesRoutingModule { }
