import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { StarRatingModule } from 'angular-star-rating';
import { ProductListComponent } from './components/product-list/product-list.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product_detail/:id', component: ProductDetailComponent },
  { path: 'product_list', component: ProductListComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ProductDetailComponent,
    ProductListComponent,
    SideBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StarRatingModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
