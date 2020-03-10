import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class UserService {

	user: any;
	public token: string;

	constructor(
		public api: ApiService,
		private storage: Storage
	) { }

	login(data: any) {
		return new Promise((resolve, reject) => {
			this.api.post('auth', data)
				.subscribe((res: any) => {
					this.setToken(res.access_token);
					this.setUser(res.user)
					console.log(res);
					resolve(res);
				}, err => {
					reject({ message: 'E-mail ou senha incorretos' });
				});
		});
	}

	activatedSms(idUser: string, code: string) {
		return new Promise((resolve, reject) => {
			this.api.post('auth/activated/sms', { idUser, code })
				.subscribe((res: any) => {
					resolve(res);
				}, err => {
					reject({ message: 'Código inválido!' });
				});
		});
	}

	resendSms(idUser: string) {
		return new Promise((resolve, reject) => {
			this.api.post('auth/resend/sms', { idUser })
				.subscribe((res: any) => {
					resolve(res);
				}, err => {
					reject({ message: 'Erro ao reenviar SMS.' });
				});
		});
	}

	register(data: any) {
		return this.api.post('auth/register', data);

	}

	setUser(user: any) {
		this.storage.set('user', user);
	}

	setToken(token: string) {
		this.storage.set('token', token);
	}

	async getUser() {
		let user;
		await this.storage.get('user').then(tk => user = tk);

		return user;
	}

	async getToken() {
		let token;
		await this.storage.get('token').then(tk => token = tk);

		return token;
	}

	logout() {
		this.storage.remove('token').then(() => {
			this.storage.remove('user');
		});
	}

}
