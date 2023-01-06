import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-good-seasons',
  templateUrl: './good-seasons.component.html',
  styleUrls: ['./good-seasons.component.scss']
})
export class GoodSeasonsComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;

  constructor(private router: Router) {

    this.items = [
      { label: '', icon: PrimeIcons.HOME, routerLink: 'homePage' },
      {
        label: 'About Us',
        items: [{
          label: 'Info',
          routerLink: 'gsHomePage'
        },
        {
          label: 'Get In Touch',
          routerLink: 'gsContacts'
        }
        ]
      },
      {
        label: 'Dry Fruits & Nuts',
        items: [{
          label: 'Almonds',
          command: () => this.routeToListPage("dryFruitsNuts_almonds"),
        },
        {
          label: 'Cashew',
          command: () => this.routeToListPage("dryFruitsNuts_cashews")
        },
        {
          label: 'Walnuts',
          command: () => this.routeToListPage("dryFruitsNuts_walnuts")
        },
        {
          label: 'Pistachios',
          command: () => this.routeToListPage("dryFruitsNuts_pistachios")
        },
        {
          label: 'Raisins',
          command: () => this.routeToListPage("dryFruitsNuts_raisins")
        }
        ]
      },
      {
        label: 'Spices',
        items: [
          {
            label: 'Corriander',
            command: () => this.routeToListPage("spices_coriander")
          },
          {
            label: 'Black Pepper',
            command: () => this.routeToListPage("spices_blackpepper")
          },
          {
            label: 'Jeera (Cumin Seed)',
            command: () => this.routeToListPage("spices_cuminseed")
          },
          {
            label: 'Cloves',
            command: () => this.routeToListPage("spices_cloves")
          },
          {
            label: 'Garam Masala Whole',
            command: () => this.routeToListPage("spices_garammasala")
          },
          {
            label: 'Saunff',
            command: () => this.routeToListPage("spices_saunff")
          },
          {
            label: 'Black Cardamom',
            command: () => this.routeToListPage("spices_blackcardamom")
          },
          {
            label: 'Green Cardamom',
            command: () => this.routeToListPage("spices_greencardamom")
          },
          {
            label: 'Methi Seeds',
            command: () => this.routeToListPage("spices_methiseeds")
          },
          {
            label: 'Ajwain (Carrom Seeds)',
            command: () => this.routeToListPage("spices_ajwain")
          },
          {
            label: 'White Poppy Seeds',
            command: () => this.routeToListPage("spices_whitepoppyseeds")
          }
        ]
      },
      {
        label: 'Oil Seeds',
        items: [
          {
            label: 'Yellow Mustard',
            command: () => this.routeToListPage("oilSeeds_yellowMustard")
          },
          {
            label: 'Black Mustard',
            command: () => this.routeToListPage("oilSeeds_blackMustard")
          },
          {
            label: 'White Sesame Seeds',
            command: () => this.routeToListPage("oilSeeds_whiteSesameSeeds")
          },
          {
            label: 'Kalaunji',
            command: () => this.routeToListPage("oilSeeds_kalaunji")
          },
          {
            label: 'Peanut',
            command: () => this.routeToListPage("oilSeeds_peanut")
          }
        ]
      },
      {
        label: 'Healthy',
        items: [
          {
            label: 'Flax Seeds',
            command: () => this.routeToListPage("healthy_flaxSeeds")
          },
          {
            label: 'Chia Seeds',
            command: () => this.routeToListPage("healthy_chiaSeeds")
          },
          {
            label: 'Sun Flower Seeds',
            command: () => this.routeToListPage("healthy_sunFlowerSeeds")
          },
          {
            label: 'Pumpkin Seeds',
            command: () => this.routeToListPage("healthy_pumpkinSeeds")
          },
          {
            label: 'Quinoa',
            command: () => this.routeToListPage("healthy_quinoa")
          },
          {
            label: 'Sabu Dana (Sago)',
            command: () => this.routeToListPage("healthy_sago")
          },
          {
            label: 'Breakfast Mix',
            command: () => this.routeToListPage("healthy_breakfastMix")
          }
        ]
      },
      {
        label: 'Buy',
        items: [
          { label: 'Amazon'},
          { label: 'India Mart' },
          { label: 'Directly with Us',
           routerLink: 'gsContacts' }
        ]
      },
         {
           label: 'Corporate Gifts',
           routerLink: 'gsContacts'
         }
    ];

    this.activeItem = this.items[0];
  }

  ngOnInit() {
  }

  routeToListPage(name: any): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then
      (() => this.router.navigateByUrl('/gsProductsList', { state: { pageName: name } }));
  }
}
