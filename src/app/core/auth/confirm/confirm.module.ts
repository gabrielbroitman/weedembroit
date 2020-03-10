import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmPage } from './confirm.page';
import { BrMaskerModule } from 'br-mask';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrMaskerModule,
		RouterModule.forChild([{ path: '', component: ConfirmPage }])
	],
	declarations: [ConfirmPage]
})
export class ConfirmPageModule {}