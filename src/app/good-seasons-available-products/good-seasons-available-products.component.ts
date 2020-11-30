import { Component, OnInit } from '@angular/core';
import { AvailableProductsService } from '../services/available-products.service';
import { AvailableProducts } from 'src/assets/domain/availableProducts';

@Component({
  selector: 'app-good-seasons-available-products',
  templateUrl: './good-seasons-available-products.component.html',
  styleUrls: ['./good-seasons-available-products.component.scss']
})
export class GoodSeasonsAvailableProductsComponent implements OnInit {

  availableProducts: AvailableProducts[];
  cols: any[];

  constructor(private availableProductsService: AvailableProductsService) { }

  ngOnInit(): void {
    this.cols = [
      {field: 'productName', header: 'Name of Item'},
      {field: 'quantityPerBag', header: 'Qty/Bag'},
      {field: 'priceRange', header: 'Price Range'}
    ];
    this.getAvailableProducts();
  }

  getAvailableProducts() {
    this.availableProductsService.getAvailableProducts().then(data => this.availableProducts = data);
    console.log(this.availableProducts);
  }

}
