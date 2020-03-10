import { CampaignService } from './../../campaign.service';
import { Router } from '@angular/router';
import { CreateCampaignDTO } from './../../../../core/dto/create-campaign.dto';
import { CampaignInterface } from './../../../../core/interfaces/campaign.interface';
import { Storage } from '@ionic/storage';
import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss'],
})
export class PreviewComponent implements OnInit {

  campaign: CreateCampaignDTO;
  constructor(private storage: Storage, private router: Router,
		private toastService: ToastService,
    private campaignService: CampaignService, ) { }

  ngOnInit() {
    this.storage.get('campaign').then((c: CreateCampaignDTO) => {
      console.log(c);
      this.campaign = c;
    });
  }

  sendNow(){
    console.log(this.campaign);
    this.campaignService.create(this.campaign).subscribe(res => {
      console.log('Sucesso');
      console.log(res)
      this.storage.remove('campaign').then(removed => {
        this.router.navigateByUrl('campaigns/create/success');
      });
    },
    err => {
      console.log(err);
      let message = 'Ocorreu algum erro!';
			console.log(err);
			this.toastService.show(err.error.message);
    });
  }
  draft(){
    this.router.navigateByUrl('campaigns/create/draft');
  }

}
