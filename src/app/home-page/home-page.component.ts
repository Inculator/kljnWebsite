import { Component, OnInit } from '@angular/core';
import { Image } from '../../assets/domain/image';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  images: any[];
  platforms: Image[];

  responsiveOptions: any[] = [
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

  responsiveOptionsCarousel = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor(private photoService: PhotoService) {
    this.photoService.getImages().then(images => this.images = images);
    this.photoService.getPlatforms().then(images => this.platforms = images);    
  }

  ngOnInit(): void {
  }

}
