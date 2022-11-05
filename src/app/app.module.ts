import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Connect ProductList Component
import { ProductsListComponent } from './components/products-list/products-list.component';
// Connect ShoppingCart Component 
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

// implement the routes
import { RouterModule } from '@angular/router';
// Page not found Page 
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
// About page 
import { AboutUsComponent } from './components/about-us/about-us.component';
// New Arrivals page
import { NewArrivalsComponent } from './components/new-arrivals/new-arrivals.component';
// Product component
import { ProductComponent } from './components/product/product.component';
// ProductDetail component
import { ProductDetailsComponent } from './components/product-details/product-details.component';

// MatToolbar Module
import { MatToolbarModule } from '@angular/material/toolbar';
// MatIcon Module
import { MatIconModule } from '@angular/material/icon';
// MatMenu Module
import { MatMenuModule } from '@angular/material/menu';
// BrowserAnimation Module 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// MatBadge Module
import { MatBadgeModule } from '@angular/material/badge';
// MatCard
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    PageNotFoundComponent,
    AboutUsComponent,
    ProductComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductsListComponent},
      { path: 'cart', component: ShoppingCartComponent},
      { path: 'aboutUs', component: AboutUsComponent},
      { path: 'newArrivals', component: NewArrivalsComponent},
      { path: '', redirectTo: '/aboutUs', pathMatch: 'full'},
      
      { path: '**', component: PageNotFoundComponent}
    ]),
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
