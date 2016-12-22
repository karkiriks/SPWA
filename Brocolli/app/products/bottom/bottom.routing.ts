/**
 * Created by RIKS on 12/13/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BottomComponent} from "./bottom.component";

const routes: Routes = [
  { path: 'products/bottom', component: BottomComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BottomRoutingModule { }
