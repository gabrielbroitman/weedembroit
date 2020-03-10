import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DonatePage } from './donate.page';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {
    path: '',
    component: DonatePage
  },
  {
    path: 'success',
    component: SuccessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DonatePageRoutingModule { }
