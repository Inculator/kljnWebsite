import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { GoodSeasonsComponent } from './good-seasons/good-seasons.component';
import { MatRadioModule } from '@angular/material';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WholeSaleComponent } from './whole-sale/whole-sale.component';
import { GoodSeasonsHomePageComponent } from './good-seasons-home-page/good-seasons-home-page.component';
import { GoodSeasonsContactsComponent } from './good-seasons-contacts/good-seasons-contacts.component';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import { GoodSeasonsProductCatalogComponent } from './good-seasons-product-catalog/good-seasons-product-catalog.component';
import { GalleriaModule } from 'primeng/galleria';
import { PhotoService } from './services/photo.service';
import { HttpClientModule } from '@angular/common/http';
import {ScrollPanelModule} from 'primeng/scrollpanel';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import { CommonModule } from '@angular/common';
import {ProductsService} from 'src/app/services/products.service';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GoodSeasonsComponent,
    WholeSaleComponent,
    GoodSeasonsHomePageComponent,
    GoodSeasonsContactsComponent,
    GoodSeasonsProductCatalogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatSelectModule,
    CardModule,
    FieldsetModule,
    GalleriaModule,
    HttpClientModule,
    ScrollPanelModule,
    CarouselModule,
    ButtonModule,
    CommonModule,
    TableModule
  ],
  providers: [
    PhotoService,
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
