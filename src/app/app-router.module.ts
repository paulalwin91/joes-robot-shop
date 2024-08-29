import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CartComponent } from './cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [

    { path:"home", component: HomeComponent, title: 'Pauls sweat shop.'},
    { path:"cart", component: CartComponent, title: 'Pauls sweat shop Cart.'},
    { path:"catalog", component: CatalogComponent, title: 'Pauls sweat shop Catalog.'},
    { path:'', redirectTo:'home', pathMatch: 'full'}
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes), CommonModule,NgIf,BrowserModule
  ]
  , exports: [RouterModule]
})
export class AppRouterModule { 
}
