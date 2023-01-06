import { AfterContentInit, Component, Input, OnChanges, OnInit } from '@angular/core';
import { ProductsListModel } from 'src/assets/domain/productsListModel';
import { ProductDetailsTransferService } from '../services/product-details-transfer.service';

@Component({
  selector: 'app-good-seasons-product-details',
  templateUrl: './good-seasons-product-details.component.html',
  styleUrls: ['./good-seasons-product-details.component.scss']
})
export class GoodSeasonsProductDetailsComponent implements AfterContentInit {

  productsListModel: ProductsListModel;

  responsiveOptions: any[];

  constructor(private productDetailsTransferService: ProductDetailsTransferService) {
    this.responsiveOptions = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
  }

  ngAfterContentInit() {
    this.productsListModel = this.productDetailsTransferService.getProductsListModel();
  }

}
