import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Storage } from '@ionic/storage';


@Injectable({
	providedIn: 'root'
})
export class ApiService {

	constructor(
		public http: HttpClient, public storage: Storage
	) { }

	public get(endpoint: string, options?: any, newHeaders?: any) {
		// Params
		let params = new HttpParams();
		Object.keys(options || {}).forEach((key) => {
			params = params.append(key, options[key]);
		});
		const paramToString = (options === undefined || Object.keys(options).length === 0) ? '' : `?${params.toString()}`;

		// Headers
		let headers = new HttpHeaders();
	
		Object.keys(newHeaders || {}).forEach((key) => {
			newHeaders = headers.set(key, newHeaders[key]);
		});
		console.log(headers)
		return this.http.get(`${environment.api}${endpoint}${paramToString}`, { headers: newHeaders });
	}

	public post(endpoint: string, data: any, newHeaders?: any) {
		const headers = new HttpHeaders();


		Object.keys(newHeaders || {}).forEach((key) => {
			newHeaders = headers.set(key, newHeaders[key]);
		});

		return this.http.post(`${environment.api}${endpoint}`, data, { headers: newHeaders });
	}

	public put(endpoint: string, data: any, newHeaders?: any) {
		const headers = new HttpHeaders();


		Object.keys(newHeaders || {}).forEach((key) => {
			newHeaders = headers.set(key, newHeaders[key]);
		});

		return this.http.put(`${environment.api}${endpoint}`, data, { headers: newHeaders });
	}

	public delete(endpoint: string, options?: any) {
		return this.http.delete(`${environment.api}${endpoint}`, options);
	}
}
