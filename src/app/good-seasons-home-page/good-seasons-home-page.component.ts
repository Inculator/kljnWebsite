import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { Constants } from '../constants';

@Component({
  selector: 'app-good-seasons-home-page',
  templateUrl: './good-seasons-home-page.component.html',
  styleUrls: ['./good-seasons-home-page.component.scss']
})
export class GoodSeasonsHomePageComponent implements OnInit {

    images: any[];

    aboutUsContent: string;
    newsContent: string;

    ABOUT_US_HEADER: string;
    NEWS_HEADER: string;

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

    constructor(private photoService: PhotoService) { }

    ngOnInit() {
        this.photoService.getImages().then(images => this.images = images);
        this.getAboutUsDetails();
        this.getNewsDetails();
        this.ABOUT_US_HEADER = Constants.ABOUT_US_HEADER;
        this.NEWS_HEADER = Constants.NEWS_HEADER;
    }

    getAboutUsDetails() {
        this.aboutUsContent =
        `
            <span>
            <b>Kishan Lal Jagan Nath</b> was established in the year 1927 by
            late Shri Jagannath Ji who came to Delhi from Shekhawati
            in the state of Rajasthan and settled at the heart and
            Asia’s biggest wholesale spice market Khari Baoli.
            </span><br><br>

            <span>
            Shri Jagannath Ji with his three sons, started with loan
            from friends in a rented shop. Gradually with great values
            and principles the firm grew and diversified in
            various Spices, Herbs and Dry Fruits.
             </span><br><br>

            <span>
            Presently, firm is operated by third and fourth generations
            with the basic motto of providing quality products to the
            customers and best competitive prices. In order to provide
            the most superior quality products to the customers,
            dedicated procurement is done from various states across the
            country and from other countries across the globe.
            </span><br><br>

            <span>
            Firm has zero tolerance for any adulteration and sub-standard
            products and raw material. Firm has a Registered Trade Mark
            ‘Good Seasons®’ for Dry Fruits and soon more brands will follow.
            </span><br><br>

            <span>
            <b>‘Good Seasons®’</b> brand will be introduced with a variety of
            packaging and various Dry Fruits.
            Firm has a wholesale business model and caters to bulk clients
            in across all range of Whole Grounded Spices, Herbs and Dry Fruits.
            </span><br><br>
        `;
    }

    getNewsDetails() {
        this.newsContent =
        `
            We are planning to launch Walnut 250gm packaging that
            will soon be updated on the website as well.
        `;
    }
}
