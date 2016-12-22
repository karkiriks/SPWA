/**
 * Created by RIKS on 12/12/16.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactUsComponent} from "./contactus.component";

const routes: Routes = [
  { path: 'contactus', component: ContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
