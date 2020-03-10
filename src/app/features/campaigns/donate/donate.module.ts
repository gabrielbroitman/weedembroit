import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DonatePageRoutingModule } from './donate-routing.module';

import { DonatePage } from './donate.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrMaskerModule } from 'br-mask';
import { PaymentMethodComponent } from './payment-method/payment-method.component';
import { SuccessComponent } from './success/success.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BrMaskerModule,
    IonicModule,
    DonatePageRoutingModule,
    SharedModule,
  ],
  declarations: [DonatePage, PaymentMethodComponent, SuccessComponent]
})
export class DonatePageModule {}
