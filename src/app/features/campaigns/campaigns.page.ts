import { CampaignInterface } from "./../../core/interfaces/campaign.interface";
import { CampaignService } from "./campaign.service";
import { Component, OnInit } from "@angular/core";
import { MenuController, LoadingController } from "@ionic/angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: "app-campaigns",
  templateUrl: "./campaigns.page.html",
  styleUrls: ["./campaigns.page.scss"]
})
export class CampaignsPage implements OnInit {
  slideOpts = {
    slidesPerView: 10,
    freeMode: false,
    initialSlide: 1,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    }
  };

  categoryFilter;

  campaigns: CampaignInterface[] = [];
  filteredCampaigns: CampaignInterface[] = [];
  constructor(
    private menu: MenuController,
    private campaignService: CampaignService,
    private loadingCtrl: LoadingController,
    private storage: Storage
  ) { }

  ngOnInit() {
    this.storage.get('campaigns').then(res => {
      if (res) {
        this.campaigns = res;
        this.filteredCampaigns = res;
      } else {
        this.findActiveCampaigns();
      }
    })
  }

  async findActiveCampaigns(event?) {
    let loading  = await this.loadingCtrl.create();
    loading.present();

    this.campaignService.findActiveCampaigns().subscribe(
      (res: CampaignInterface[]) => {
        this.campaigns = res;
        this.storage.set('campaigns', res);
        this.filteredCampaigns = res;
        console.log(res);
        loading.dismiss();
        event.target.complete();
      },
      (err: any) => {
        console.log(err)
      }
    );
  }

  openEnd() {
    this.menu.open('end');
  }

  filterCategories(event) {
    console.log(event);
    if (event === 'Todos') {
      this.filteredCampaigns = this.campaigns;
    } else {
      this.filteredCampaigns = this.campaigns.filter((campaign: any) => campaign.category.name === event);
    }


  }
}
