import { Component, OnInit } from '@angular/core';
import { ProductsListModel } from 'src/assets/domain/productsListModel';
import { ProductsList } from '../services/productsList.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductDetailsTransferService } from '../services/product-details-transfer.service';

@Component({
  selector: 'app-good-seasons-product-list',
  templateUrl: './good-seasons-product-list.component.html',
  styleUrls: ['./good-seasons-product-list.component.scss']
})
export class GoodSeasonsProductListComponent implements OnInit {
  productsListModel: ProductsListModel[];
  name: any;

  constructor(private productsList: ProductsList, private route: ActivatedRoute,
    private router: Router, private productDetailsTransferService: ProductDetailsTransferService) { 
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      
      this.name = this.router.getCurrentNavigation().extras.state.pageName;
      this.getProductsList();
    }

  ngOnInit(): void {

  }

  getProductsList() {
    this.productsList.getProducts(this.name).then(data => this.productsListModel = data);
  }

  navigateToDetailsPage(product: ProductsListModel) {
    this.productDetailsTransferService.setProductsListModel(product);
    this.router.navigateByUrl('/gsProductsDetails');
  }
}
