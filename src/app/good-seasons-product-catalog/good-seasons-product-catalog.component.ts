import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Products } from 'src/assets/domain/products';

@Component({
  selector: 'app-good-seasons-product-catalog',
  templateUrl: './good-seasons-product-catalog.component.html',
  styleUrls: ['./good-seasons-product-catalog.component.scss']
})
export class GoodSeasonsProductCatalogComponent implements OnInit {

    isSpicesSelected = false;
    isDryFruitsSelected = false;
    isOilSeedsSelected = false;

    spicesProducts: Products[];
    dryFruitsProducts: Products[];
    oilSeedsProducts: Products[];

    constructor(private productsService: ProductsService) { }

    ngOnInit() {
        this.isSpicesSelected = true;
        this.spicesSelected();
    }

    spicesSelected() {
        this.isDryFruitsSelected = false;
        this.isSpicesSelected = true;
        this.isOilSeedsSelected = false;

        this.productsService.getSpicesProducts().then(data => this.spicesProducts = data);
    }

    dryFruitsSelected() {
        this.isDryFruitsSelected = true;
        this.isSpicesSelected = false;
        this.isOilSeedsSelected = false;

        this.productsService.getDryFruitsProducts().then(data => this.dryFruitsProducts = data);
    }

    oilSeedsSelected() {
        this.isDryFruitsSelected = false;
        this.isSpicesSelected = false;
        this.isOilSeedsSelected = true;

        this.productsService.getOilSeedsProducts().then(data => this.oilSeedsProducts = data);
    }
}
