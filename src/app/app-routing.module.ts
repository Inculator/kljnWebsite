import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodSeasonsComponent } from './good-seasons/good-seasons.component';
import { GoodSeasonsHomePageComponent } from './good-seasons-home-page/good-seasons-home-page.component';
import { GoodSeasonsContactsComponent } from './good-seasons-contacts/good-seasons-contacts.component';
import { GoodSeasonsProductCatalogComponent } from './good-seasons-product-catalog/good-seasons-product-catalog.component';
import { GoodSeasonsAvailableProductsComponent } from './good-seasons-available-products/good-seasons-available-products.component';
import { HomePageComponent } from './home-page/home-page.component';
import { GoodSeasonsProductListComponent } from './good-seasons-product-list/good-seasons-product-list.component';
import { GoodSeasonsProductDetailsComponent } from './good-seasons-product-details/good-seasons-product-details.component';


const routes: Routes = [{path: '', redirectTo: '/homePage', pathMatch: 'full'},
  {path: '', component: GoodSeasonsComponent,
  children: [
              {path: 'homePage', component: HomePageComponent},
              {path: 'gsHomePage', component: GoodSeasonsHomePageComponent},
              {path: 'gsContacts', component: GoodSeasonsContactsComponent},
              {path: 'gsProductCatalog', component: GoodSeasonsProductCatalogComponent},
              {path: 'gsAvailableProducts', component: GoodSeasonsAvailableProductsComponent},
              {path: 'gsProductsList', component: GoodSeasonsProductListComponent},
              {path: 'gsProductsDetails', component: GoodSeasonsProductDetailsComponent}
            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
