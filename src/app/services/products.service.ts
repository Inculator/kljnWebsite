import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from 'src/assets/domain/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getSpicesProducts(){
    return this.http.get<any>('assets/data/spicesProducts.json')
      .toPromise().then(res => res.data as Products[])
      .then(data => data);
  }

  getDryFruitsProducts(){
    return this.http.get<any>('assets/data/dryFruitsProducts.json')
      .toPromise().then(res => res.data as Products[])
      .then(data => data);
  }

  getOilSeedsProducts(){
    return this.http.get<any>('assets/data/oilSeedsProducts.json')
      .toPromise().then(res => res.data as Products[])
      .then(data => data);
  }
}
