import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { environment } from '../../../environments/environment';
import { ModalController } from '@ionic/angular';
import { LoginRequiredModalComponent } from 'src/app/shared/components/login-required-modal/login-required-modal.component';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(
		private authService: UserService,
		private router: Router,
		private modalController: ModalController
	) { }

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.checkLogin();
	}

	canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		return this.canActivate(route, state);
	}

	async checkLogin() {
		const token: string = await this.authService.getToken();
		if (token) {
			return true;
		} else {
			this.openMyModal()
		}


		//this.router.navigateByUrl('/login');
	}

	async openMyModal() {
		const myModal = await this.modalController.create({
		  component: LoginRequiredModalComponent,
		  cssClass: 'my-custom-modal-css'
		});
		return await myModal.present();
	}

	
	  

}