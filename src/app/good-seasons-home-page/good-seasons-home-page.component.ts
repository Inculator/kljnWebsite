import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-good-seasons-home-page',
  templateUrl: './good-seasons-home-page.component.html',
  styleUrls: ['./good-seasons-home-page.component.scss']
})
export class GoodSeasonsHomePageComponent implements OnInit {

    images: any[];

    responsiveOptions:any[] = [
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

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.photoService.getImages().then(images => this.images = images);
    }

}
