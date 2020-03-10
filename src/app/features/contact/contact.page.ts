import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {

  email: string;
  telephone: number;
  message: string;



  constructor() { }

  ngOnInit() {
  }

}
