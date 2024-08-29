import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import { AppRouterModule } from './app-router.module';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogComponent,
    SiteHeaderComponent,
    ProductDetailsComponent,
    CartComponent
  ],
  imports: [
    CommonModule,BrowserModule, HttpClientModule, AppRouterModule,NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
