import { IonicModule } from '@ionic/angular';
import { COMPONENTS } from './components/components';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoneyPipe } from './pipes/money.pipe';
import { RouterModule } from '@angular/router';
import { CategoryService } from './services/category.service';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  entryComponents: [...COMPONENTS],
  declarations: [...COMPONENTS, MoneyPipe],
  exports: [...COMPONENTS, MoneyPipe],
  providers: [CategoryService]
})
export class SharedModule { }
