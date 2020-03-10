import { Router } from '@angular/router';
import { CategoryInterface } from './../../../../core/interfaces/category.interface';
import { CategoriesComponent } from './../step3/categories/categories.component';
import { ModalController } from '@ionic/angular';
import { CreateCampaignDTO } from 'src/app/core/dto/create-campaign.dto';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss'],
})
export class Step4Component implements OnInit {

  description: string;
  constructor(private storage: Storage, private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {
    this.storage.get('campaign').then((c: CreateCampaignDTO) => {
    });
  }

  // TODO PAULO REMOVER ESTE CODIGO DUPLICADO, JA EXISTE EM STEP3, desacoplar


  next() {
    this.storage.get("campaign").then((c: CreateCampaignDTO) => {
      c.description = this.description;
      this.storage
        .set("campaign", c)
        .then(() => this.router.navigate(["/campaigns/create/step-2"]));
    });
  }
}
