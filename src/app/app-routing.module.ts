import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodSeasonsComponent } from './good-seasons/good-seasons.component';
import { GoodSeasonsHomePageComponent } from './good-seasons-home-page/good-seasons-home-page.component';
import { GoodSeasonsContactsComponent } from './good-seasons-contacts/good-seasons-contacts.component';
import { GoodSeasonsProductCatalogComponent } from './good-seasons-product-catalog/good-seasons-product-catalog.component';


const routes: Routes = [{path: '', redirectTo: '/gsHomePage', pathMatch: 'full'},
  {path: '', component: GoodSeasonsComponent,
  children: [
              {path: 'gsHomePage', component: GoodSeasonsHomePageComponent},
              {path: 'gsContacts', component: GoodSeasonsContactsComponent},
              {path: 'gsProductCatalog', component: GoodSeasonsProductCatalogComponent}
            ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
