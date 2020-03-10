import { Component, OnInit } from '@angular/core';
import { CampaignInterface } from 'src/app/core/interfaces/campaign.interface';
import { MenuController, LoadingController } from '@ionic/angular';
import { CampaignService } from '../campaigns/campaign.service';
import { UserService } from 'src/app/core/services/user.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-my-campaigns',
  templateUrl: './my-campaigns.page.html',
  styleUrls: ['./my-campaigns.page.scss'],
})
export class MyCampaignsPage implements OnInit {
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
  user: any;
  constructor(
    private menu: MenuController,
    private campaignService: CampaignService,
    private userService: UserService,
    private storage: Storage,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
    this.userService.getUser().then(res => {
      console.log(res)
      this.user = res;
      this.storage.get('userCampaigns').then(res => {
        if (res) {
          this.campaigns = res;
          this.filteredCampaigns = res;
        } else {
          this.findActiveCampaigns();
        }
      })
    });


  }

  async findActiveCampaigns(event?) {
    let loading = await this.loadingCtrl.create();
    loading.present()


    this.campaignService.getUserCampaigns(this.user._id).then(
      (res: any) => {
        loading.dismiss();
        this.campaigns = res;
        this.storage.set('userCampaigns', res);
        this.filteredCampaigns = res;
        console.log(res);
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
      this.filteredCampaigns = this.campaigns.filter((campaign: any) => campaign._id === event);
    }


  }

}
