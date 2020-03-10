import { Component, OnInit } from '@angular/core';
import { NavController, LoadingController } from '@ionic/angular';
import { CampaignService } from '../campaign.service';
import { ActivatedRoute } from '@angular/router';
import { CreateDonationDTO } from 'src/app/core/dto/create-donation.dto';
import { UserService } from 'src/app/core/services/user.service';
import { DonationService } from './donation.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.page.html',
  styleUrls: ['./donate.page.scss'],
})
export class DonatePage implements OnInit {
  valor;
  campaign;
  loaded = false;
  user;
  donation;
  constructor(private nav: NavController, private service: CampaignService,
    private route: ActivatedRoute, private storage: Storage,
    private loadingCtrl: LoadingController, private userService: UserService,
    private donateService: DonationService, private toast: ToastService) {
    this.donation = new CreateDonationDTO();

  }


  ngOnInit() {
    this.findCampaign();
    this.userService.getUser().then(res => {
      this.user = res;
      console.log(res);
    })
    this.donation.paymentMethod = 'CREDIT_CARD';
  }

  async findCampaign() {
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
          this.donation.campaignId = id;
          this.donation.userId = this.user._id;

          console.log(res);
        });
      }
    });
  }

  async sendDonation() {
    let loading = await this.loadingCtrl.create()
    loading.present();
    console.log(this.donation);
    this.donateService.create(this.donation).subscribe(res => {
      console.log(res);
      this.storage.set('campanhaDoacao', this.campaign);
      loading.dismiss();
      this.nav.navigateForward('success');
    }, err => {
      this.toast.show(err);
      console.log(err);
      loading.dismiss();

    })
  }

}
