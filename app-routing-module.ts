import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {About} from './about/about'
import { Listproduct1 } from './listproduct1/listproduct1';
import { Listproduct2 } from './listproduct2/listproduct2';
import { Pagenotfound } from './pagenotfound/pagenotfound';
import { Listcustomer } from './listcustomer/listcustomer';
import { Customerdetail } from './customerdetail/customerdetail';
import { Listcustomerservice } from './listcustomerservice/listcustomerservice';
import { Listcustomerservicedetail } from './listcustomerservicedetail/listcustomerservicedetail';
import { Ex13 } from './ex13/ex13';
import { Ex13detail } from './ex13detail/ex13detail';

export const routes: Routes = [
  {path:"gioi-thieu",component:About},
  {path:"sanpham1",component:Listproduct1},
  {path:"sanpham2",component:Listproduct2},
  {path:"list-customer",component:Listcustomer},
  {path:"list-customer/:id",component:Customerdetail},
  {path:"list-customer-service",component:Listcustomerservice},
  {path:"list-customer-service/:id",component:Listcustomerservicedetail},
  {path:'service-product-image-event', component:Ex13},
  {path:'service-product-image-event/:id',component:Ex13detail},
  //{path:"**",component:Pagenotfound}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
