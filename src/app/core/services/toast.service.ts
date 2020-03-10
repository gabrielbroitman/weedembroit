import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ToastService {

	constructor(private toastCtrl: ToastController) { }

	show(msg: string, duration = 3000) {
		this.toastCtrl.create({
			message: msg,
			duration
		}).then(toast => {
			toast.present();
		});
	}

}
