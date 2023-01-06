import { Injectable } from '@angular/core';
import { ProductsListModel } from 'src/assets/domain/productsListModel';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsTransferService {

  productsListModel: ProductsListModel;
  
  constructor() { }

  setProductsListModel(productsListModel: ProductsListModel){
    this.productsListModel = productsListModel;
  }

  getProductsListModel() {
    return this.productsListModel;
  }
}
