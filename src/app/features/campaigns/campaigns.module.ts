import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { SharedModule } from "src/app/shared/shared.module";
import { CampaignsPageRoutingModule } from "./campaigns-routing.module";
import { CampaignsPage } from "./campaigns.page";
import { SuccessComponent } from './donate/success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CampaignsPageRoutingModule,
    SharedModule
  ],
  declarations: [CampaignsPage]
})
export class CampaignsPageModule {}
