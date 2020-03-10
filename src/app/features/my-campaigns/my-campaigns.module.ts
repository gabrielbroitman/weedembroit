import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { MyCampaignsPage } from './my-campaigns.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { CampaignsPageModule } from '../campaigns/campaigns.module';
import { RouterModule } from '@angular/router';
import { CampaignService } from '../campaigns/campaign.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    IonicModule,
    RouterModule.forChild([{ path: "", component: MyCampaignsPage }]),

  ],
  declarations: [MyCampaignsPage],
  providers: [CampaignService]
})
export class MyCampaignsPageModule { }
