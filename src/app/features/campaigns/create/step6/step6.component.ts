import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { ContactInterface } from './../../../../core/interfaces/contact.interface';
import { CreateCampaignDTO } from 'src/app/core/dto/create-campaign.dto';
import { AddressInterface } from './../../../../core/interfaces/address.interface';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss'],
})
export class Step6Component implements OnInit {

  address: AddressInterface = {};
  contact: ContactInterface = {};

  form: FormGroup;
  constructor(private formBuilder: FormBuilder, private storage: Storage, private router: Router, private navController: NavController) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      address: this.formBuilder.group({
        street: ['', Validators.required],
        number: ['', Validators.required],
        cep: ['', Validators.required],
        neighborhood: ['', Validators.required],
        city: ['', Validators.required],
        state: ['', Validators.required],
      }),
      contact: this.formBuilder.group({
        cellPhone: ['', Validators.required],
        telephone: [''],
      })
    });
  }


  preview() {

    this.address = this.form.get('address').value;
    this.contact = this.form.get('contact').value;

    
    this.storage.get("campaign").then((c: CreateCampaignDTO) => {
      c.address = this.address;
      c.contact = this.contact;
      this.storage
        .set("campaign", c)
        .then(() => this.router.navigate(["/campaigns/create/preview"]));
    });
  }

  backPage() {
    this.router.navigate(["/campaigns/create/preview"])
  }
}
