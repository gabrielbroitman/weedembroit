import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupPage } from './signup.page';
import { BrMaskerModule } from 'br-mask';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
	imports: [
		IonicModule,
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		BrMaskerModule,
		SharedModule,
		RouterModule.forChild([{ path: '', component: SignupPage }])
	],
	declarations: [SignupPage]
})
export class SignupPageModule {}