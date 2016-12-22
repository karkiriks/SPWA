/**
 * Created by RIKS on 12/12/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutUsComponent} from "./aboutus.component";

const routes: Routes = [
  { path: 'about-us', component: AboutUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutusRoutingModule { }
