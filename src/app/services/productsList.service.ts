import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { ProductsListModel } from 'src/assets/domain/productsListModel';

@Injectable()
export class ProductsList {

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    constructor(private http: HttpClient) { }

    getProducts(fileName: any) {
        return this.http.get<any>('assets/data/'+fileName+'.json')
        .toPromise()
        .then(res => <ProductsListModel[]>res.data)
        .then(data => { return data; });
    }

}