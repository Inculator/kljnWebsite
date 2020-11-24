import { Component, OnInit } from '@angular/core';
import {MenuItem, PrimeIcons} from 'primeng/api';

@Component({
  selector: 'app-good-seasons',
  templateUrl: './good-seasons.component.html',
  styleUrls: ['./good-seasons.component.scss']
})
export class GoodSeasonsComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor() {
    this.items = [
      {label: 'Home', icon: PrimeIcons.HOME, routerLink: 'gsHomePage'},
      {label: 'Products', icon: PrimeIcons.INFO, routerLink: 'gsProductCatalog'},
      {label: 'Contact Us', icon: PrimeIcons.INBOX, routerLink: 'gsContacts'}
    ];

    this.activeItem = this.items[0];
   }

  ngOnInit() {
  }

}
