import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.page.html',
	styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	loginForm: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		public userService: UserService,
		private navController: NavController,
		private loadingCtrl: LoadingController,
		private toastService: ToastService
	) {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.loginForm = this.formBuilder.group({
			email: ['', [Validators.required, Validators.pattern(emailRegex)]],
			password: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	ngOnInit() { 
		this.userService.getUser().then(res => {
			if(res) {
				this.navController.navigateForward('campaigns')
			}
		})
	}

	async send() {
		if (this.loginForm.invalid) { return; }

		const loading = await this.loadingCtrl.create();
		await loading.present();
		this.userService.login(this.loginForm.value).then((res) => {
			this.navController.navigateRoot('/campaigns');
			loading.dismiss();
		}, (err: any) => {
			this.toastService.show(err.message);
			loading.dismiss();
		});
	}

}
