import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { Ex3 } from './ex3/ex3';
import { Mybinding } from './mybinding/mybinding';
import { Ptb1 } from './ptb1/ptb1';
import { GPA } from './GPA/GPA';
import { FormsModule } from '@angular/forms';
import { Ptb2 } from './ptb2/ptb2';
import { Learndirective } from './learndirective/learndirective';
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Customer } from './customer/customer';
import { ServiceProductHttp } from './service-product-http/service-product-http';
import { Ex10 } from './ex10/ex10';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Listcustomerservicedetail } from './listcustomerservicedetail/listcustomerservicedetail';
import { Ex13 } from './ex13/ex13';
import { Ex13detail } from './ex13detail/ex13detail';
import { Ex14 } from './ex14/ex14';
import { Ex19 } from './ex19/ex19';
import { Ex18 } from './ex18/ex18';

@NgModule({
  declarations: [
    App,
    About,
    Contact,
    Ex3,
    Mybinding,
    Ptb1,
    GPA,
    Ptb2,
    Learndirective,
    Listproduct1,
    Listproduct2,
    Customer,
    ServiceProductHttp,
    Ex10,
    Pagenotfound,
    Listcustomer,
    Customerdetail,
    Listcustomerservice,
    Listcustomerservicedetail,
    Ex13,
    Ex13detail,
    Ex14,
    Ex19,
    Ex18
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
