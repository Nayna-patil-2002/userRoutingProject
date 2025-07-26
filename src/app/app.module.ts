import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { UserComponent } from './component/user/user.component';
import { HomeComponent } from './component/home/home.component';
import { ProductComponent } from './component/product/product.component';
import { FairsComponent } from './component/fairs/fairs.component';
import { RouterModule } from '@angular/router';
import { UserDtailsComponent } from './component/user/user-dtails/user-dtails.component';
import { UserFormComponent } from './component/user/user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BackBtnComponent } from './component/back-btn/back-btn.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './component/material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserComponent,
    HomeComponent,
    ProductComponent,
    FairsComponent,
    UserDtailsComponent,
    UserFormComponent,
    BackBtnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
