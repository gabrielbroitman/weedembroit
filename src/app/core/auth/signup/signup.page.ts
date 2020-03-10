import { File } from '@ionic-native/file/ngx';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoadingController, NavController, ActionSheetController } from '@ionic/angular';
import { UserService } from '../../services/user.service';
import { ToastService } from '../../services/toast.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage'

@Component({
	selector: 'app-signup',
	templateUrl: './signup.page.html',
	styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

	signupForm: FormGroup;
	croppedImagepath = "";
	isLoading = false;

	imagePickerOptions = {
		maximumImagesCount: 1,
		quality: 50
	};

	constructor(
		private formBuilder: FormBuilder,
		public userService: UserService,
		private navController: NavController,
		private loadingCtrl: LoadingController,
		private toastService: ToastService,
		private storage: Storage,
		private camera: Camera,
		public actionSheetController: ActionSheetController,
		private file: File
	) {
		const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		this.signupForm = this.formBuilder.group({
			fullName: ['', Validators.required],
			userName: ['', Validators.required],
			email: ['', [Validators.required, Validators.pattern(emailRegex)]],
			phone: ['', Validators.required],
			password: ['', [Validators.required, Validators.minLength(6)]],
			repassword: ['', [Validators.required, Validators.minLength(6)]]
		});
	}

	ngOnInit() { }

	captureImage() {
		const options: CameraOptions = {
			quality: 100,
			destinationType: this.camera.DestinationType.FILE_URI,
			encodingType: this.camera.EncodingType.JPEG,
			mediaType: this.camera.MediaType.PICTURE
		};
		this.camera.getPicture(options).then((imageData) => {
			// imageData is either a base64 encoded string or a file URI
			// If it's base64 (DATA_URL):
			// let base64Image = 'data:image/jpeg;base64,' + imageData;
			let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
			// Handle error
		});
	}

	async send() {

		if (this.signupForm.get('password').value !== this.signupForm.get('repassword').value) {
			this.toastService.show('As senhas informadas não coincidem.');
			return;
		}

		const loading = await this.loadingCtrl.create();
		await loading.present();
		this.userService.register(this.signupForm.value).subscribe((res: any) => {
			console.log(res);
			this.storage.set('user', res).then(() => {
			});
			this.navController.navigateRoot('/confirm');

		}, err => {
			let message = 'Ocorreu algum erro!';
			if (err.code) {

				if (err.error.code === 'invalid_password') {
					message = 'Senha invalida! A-Z, a-z, number and caracter especial';
				}
				if (err.error.code === 'invalid_signup') {
					message = 'E-mail já esta cadastrado';
				}
			}
			console.log(err);
			this.toastService.show(err.message);
			// reject({ message });
		}).add(res => {
			loading.dismiss();
		});
	}

}