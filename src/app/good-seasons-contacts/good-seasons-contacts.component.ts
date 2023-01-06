import { Component, OnInit } from '@angular/core';
import { Message } from 'primeng/api/message';
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

  message: string;
  contact: string;
  name: string;
  email: string;

  successMessage: Message[];

  constructor() {
  }

  ngOnInit() {
    this.FIRM_NAME = Constants.FIRMNAME;
    this.ADDRESS = Constants.ADDRESS;
    this.EMAIL_ID = Constants.EMAIL_ID;
    this.PHONE_NUMBER = Constants.PHONE_NUMBER;
    this.MOBILE_NUMBER = Constants.MOBILE_NUMBER;
    this.WEBSITE = Constants.WEBSITE;
  }

  sendEmail() {
    var bodyMessage = "Name: " + this.name +
      "%0d%0a Email: "+ this.email + "%0d%0a Contact: " + this.contact + "%0d%0a Message: " +  this.message ;
    var mail = document.createElement("a");
    mail.href = "mailto:"+ this.EMAIL_ID +"?subject=Enquiry Good Seasons&body="+bodyMessage;
    mail.click();

    this.name = "";
    this.contact = "";
    this.message = "";
    this.email = "";
    this.successMessage = [{severity:'info', detail:'Thank you! Our team will connect with you shortly.'}];
  }
}
