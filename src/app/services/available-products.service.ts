import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AvailableProducts } from 'src/assets/domain/availableProducts';

@Injectable({
  providedIn: 'root'
})
export class AvailableProductsService {

  constructor(private http: HttpClient) { }

  getAvailableProducts(){
    return this.http.get<any>('assets/data/availableProducts.json')
      .toPromise().then(res => res.data as AvailableProducts[])
      .then(data => data);
  }
}
