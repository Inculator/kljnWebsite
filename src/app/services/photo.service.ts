import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Image } from 'src/assets//domain/image';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  getImages() {
    return this.http.get<any>('assets/data/productCatalog.json')
      .toPromise().then(res => res.data as Image[])
      .then(data => data);
  }

  getPlatforms() {
    return this.http.get<any>('assets/data/platforms.json')
      .toPromise().then(res => res.data as Image[])
      .then(data => data);
  }

}
