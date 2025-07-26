import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { FairsComponent } from './component/fairs/fairs.component';
import { ProductComponent } from './component/product/product.component';
import { UserComponent } from './component/user/user.component';

const routes: Routes = [
    {
    path:" ",
    component: HomeComponent
   },

   {
    path:"home",
    component: HomeComponent
   },
    {
    path:"user",
    component:UserComponent
   },
    {
    path:"product",
    component: ProductComponent
   },
  
   {
    path:"fairs",
    component: FairsComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: []
})
export class AppRoutingModule {


  
 }
