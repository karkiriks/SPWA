/**
 * Created by RIKS on 12/12/16.
 */

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DressComponent} from "./dress.component";

const routes: Routes = [
  { path: 'products/dresses', component: DressComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DressRoutingModule { }
