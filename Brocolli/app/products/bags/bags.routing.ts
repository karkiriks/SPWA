/**
 * Created by RIKS on 12/13/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BagsComponent} from "./bags.component";

const routes: Routes = [
  { path: 'products/bags', component: BagsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BagsRoutingModule { }
