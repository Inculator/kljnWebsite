import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() {
    this.items = [
      {label: 'Good Seasons', routerLink: ['/goodSeasons']}
      // {label: 'Whole Sale', routerLink: ['/wholeSale']}
    ];

    this.activeItem = this.items[0];
   }

  ngOnInit() {
  }

}
