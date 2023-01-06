import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Constants } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kljnWebsite';

  facebookUrl:string = 'https://www.facebook.com/Kishan-Lal-Jagannath-200917289964544';
  instagramUrl:string = 'https://www.facebook.com/Kishan-Lal-Jagannath-200917289964544';


  FIRM_NAME: string;
  ADDRESS: string;
  EMAIL_ID: string;
  PHONE_NUMBER: string;
  MOBILE_NUMBER: string;
  WEBSITE: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.FIRM_NAME = Constants.FIRMNAME;
    this.ADDRESS = Constants.ADDRESS;
    this.EMAIL_ID = Constants.EMAIL_ID;
    this.PHONE_NUMBER = Constants.PHONE_NUMBER;
    this.MOBILE_NUMBER = Constants.MOBILE_NUMBER;
    this.WEBSITE = Constants.WEBSITE;

    this.router.navigate(['/homePage'])
  }

  onClickFabebook() {
    window.open('https://www.facebook.com/Kishan-Lal-Jagannath-200917289964544', '_blank');
  }

  onClickBlog() {
    window.open('https://flavourofspices.blogspot.com/', '_blank');
  }
}
