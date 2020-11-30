import { Component, OnInit } from '@angular/core';
import { Constants } from '../constants';

@Component({
  selector: 'app-good-seasons-contacts',
  templateUrl: './good-seasons-contacts.component.html',
  styleUrls: ['./good-seasons-contacts.component.scss']
})
export class GoodSeasonsContactsComponent implements OnInit {

  FIRM_NAME: string;
  ADDRESS: string;
  EMAIL_ID: string;
  PHONE_NUMBER: string;
  MOBILE_NUMBER: string;
  WEBSITE: string;

  constructor() { }

  ngOnInit() {
    this.FIRM_NAME = Constants.FIRMNAME;
    this.ADDRESS = Constants.ADDRESS;
    this.EMAIL_ID = Constants.EMAIL_ID;
    this.PHONE_NUMBER = Constants.PHONE_NUMBER;
    this.MOBILE_NUMBER = Constants.MOBILE_NUMBER;
    this.WEBSITE = Constants.WEBSITE;
  }

}
