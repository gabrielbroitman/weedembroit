import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';
import { CampaignService } from '../campaign.service';
import { Route } from '@angular/compiler/src/core';
import { CampaignInterface } from 'src/app/core/interfaces/campaign.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  campaign: CampaignInterface;
  loaded = false;

  constructor(private nav: NavController, private service: CampaignService, private route: ActivatedRoute, private loadingCtrl: LoadingController) { }

  ngOnInit() {
    this.buscarCampanha();
  }

  async buscarCampanha() {
     let loading = await this.loadingCtrl.create()
     loading.present();
    let id;
    this.route.params.subscribe(res => {
      console.log(res.id);
      id = res.id;
      if (id) {
        this.service.getCampanha(id).subscribe(res => {
          this.campaign = res;
      loading.dismiss();
      this.loaded = true;

          console.log(res);
        });
      }
    });
  }

  goBack() {
    this.nav.back();
  }

}
