import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';

@Component({
	selector: 'app-confirm',
	templateUrl: './confirm.page.html',
	styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements AfterViewInit {

	@ViewChild('digit1', { static: true }) digit1: any;
	confirmForm: FormGroup;
	userEmail: string;
	id;
	constructor(
		private formBuilder: FormBuilder,
		public userService: UserService,
		private navController: NavController,
		private loadingCtrl: LoadingController,
		private toastService: ToastService
	) {
		this.confirmForm = this.formBuilder.group({
			digit1: ['', [Validators.required, Validators.minLength(1)]],
			digit2: ['', [Validators.required, Validators.minLength(1)]],
			digit3: ['', [Validators.required, Validators.minLength(1)]],
			digit4: ['', [Validators.required, Validators.minLength(1)]]
		});
	}

	ngAfterViewInit() {
		this.focusFirstInput();
		this.userService.getUser().then(u => {
			this.userEmail = u.email;
			this.id = u._id;
			console.log(u);
		});
	}

	focusFirstInput() {
		setTimeout(() => {
			this.digit1.setFocus();
		}, 500);
	}

	moveFocus(nextElement) {
		nextElement.setFocus();
	}

	async active() {
		if (this.confirmForm.invalid) { return; }
		const loading = await this.loadingCtrl.create();
		await loading.present();

		let code = '';
		Object.keys(this.confirmForm.controls).forEach(key => {
			code += this.confirmForm.controls[key].value;
		});

		this.userService.activatedSms(this.id, code).then((res) => {
			loading.dismiss();
			this.navController.navigateRoot('/login');
		}, (err: any) => {
			this.toastService.show(err.message);
			loading.dismiss();
		});
	}

	async resendCode() {
		const loading = await this.loadingCtrl.create();
		await loading.present();
		this.userService.resendSms(this.id).then((res) => {
			this.confirmForm.reset();
			this.toastService.show('Código reenviado com sucesso.');
			loading.dismiss();
		}, (err: any) => {
			this.toastService.show(err.message);
			loading.dismiss();
		});
	}
}