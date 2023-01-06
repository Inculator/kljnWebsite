import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { GoodSeasonsComponent } from './good-seasons/good-seasons.component';
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
import { GoodSeasonsAvailableProductsComponent } from './good-seasons-available-products/good-seasons-available-products.component';
import {ChipsModule} from 'primeng/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MenubarModule} from 'primeng/menubar';
import { HomePageComponent } from './home-page/home-page.component';
import {DataViewModule} from 'primeng/dataview';
import {DividerModule} from 'primeng/divider';
import {InputTextareaModule} from 'primeng/inputtextarea';
import { FormsModule } from '@angular/forms';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { GoodSeasonsProductListComponent } from './good-seasons-product-list/good-seasons-product-list.component';
import { ProductsList } from './services/productsList.service';
import { GoodSeasonsProductDetailsComponent } from './good-seasons-product-details/good-seasons-product-details.component';
import { ProductDetailsTransferService } from './services/product-details-transfer.service';
import {TabViewModule} from 'primeng/tabview';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    GoodSeasonsComponent,
    WholeSaleComponent,
    GoodSeasonsHomePageComponent,
    GoodSeasonsContactsComponent,
    GoodSeasonsProductCatalogComponent,
    GoodSeasonsAvailableProductsComponent,
    HomePageComponent,
    GoodSeasonsProductListComponent,
    GoodSeasonsProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    CardModule,
    FieldsetModule,
    GalleriaModule,
    HttpClientModule,
    ScrollPanelModule,
    CarouselModule,
    ButtonModule,
    CommonModule,
    TableModule,
    ChipsModule,
    BrowserAnimationsModule,
    MenubarModule,
    DataViewModule,
    DividerModule,
    InputTextareaModule,
    FormsModule,
    MessagesModule,
    MessageModule,
    TabViewModule
  ],
  providers: [
    PhotoService,
    ProductsService,
    ProductsList,
    ProductDetailsTransferService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
