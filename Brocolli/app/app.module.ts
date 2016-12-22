import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import {HomeComponent} from "./home.component";
import {ContactRoutingModule} from "./contactus/contactus.routing";
import {ContactUsComponent} from "./contactus/contactus.component";
import {BannerComponent} from "./banner/banner.component";
import {AboutUsComponent} from "./aboutus/aboutus.component";
import {AboutusRoutingModule} from "./aboutus/about-us.routing";
import {ProductService} from "./products/product.service";
import {ProductComponent} from "./products/products.component";
import {DressRoutingModule} from "./products/dresses/dresses.routing";
import {BagsRoutingModule} from "./products/bags/bags.routing";
import {BottomRoutingModule} from "./products/bottom/bottom.routing";
import {ShoesRoutingModule} from "./products/shoes/shoes.routing";
import {TopRoutingModule} from "./products/top/top.routing";
import {BagsComponent} from "./products/bags/bags.component";
import {BottomComponent} from "./products/bottom/bottom.component";
import {ShoesComponent} from "./products/shoes/shoes.component";
import {TopComponent} from "./products/top/top.component";
import {DressComponent} from "./products/dresses/dress.component";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./InMemoryDataService.component";
import {HttpModule} from "@angular/http";
import {AdminComponent} from "./admin/admin.component";
import {AdminRoutingModule} from "./admin/admin.routing";
import {Ng2PaginationModule, PaginatePipe, PaginationService} from 'ng2-pagination';
import {AdminService} from "./admin/admin.service";
import {AddProductComponent} from "./products/addproduct.component";

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, ContactRoutingModule,
  AboutusRoutingModule,
    DressRoutingModule,
  BagsRoutingModule,
  BottomRoutingModule,
  ShoesRoutingModule,
  TopRoutingModule,HttpModule,
  InMemoryWebApiModule.forRoot(InMemoryDataService),
  AdminRoutingModule,
    Ng2PaginationModule,
  ],
  declarations: [ AppComponent, HomeComponent, ContactUsComponent,
  BannerComponent,
  AboutUsComponent,
  ProductComponent,
  DressComponent,
  BagsComponent,
  BottomComponent,
  ShoesComponent,
  TopComponent,
  AdminComponent,
    AddProductComponent],
  providers: [ProductService,
    PaginationService, PaginatePipe,
    AdminService,
  ],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
