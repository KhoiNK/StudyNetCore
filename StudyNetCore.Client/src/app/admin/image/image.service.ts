import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globalConst from "../../global-constant";
const ClientID: any = "Client-ID 69327a355faae60";
const imgur = "https://api.imgur.com/3/image";

@Injectable()
export class ImageService {
	private apiUrl = globalConst.apiUrl + "Image/";
	private options: any;
	private headers: any;

	constructor(private _http: Http, private _authHttp: AuthHttp) {
		this.headers = new Headers({ 'Content-Type': 'application/json' });
		let token = JSON.parse(sessionStorage.getItem('token'));
		this.headers.append('Authorization', 'Bearer ' + token);
		this.options = new RequestOptions({ headers: this.headers });
	}

	GetImages(pageIndex): Observable<any[]> {
		return this._http.get(this.apiUrl + "Get/" + pageIndex, this.options).map(res => res.json());
	}

	GetImageDetail(id): Observable<any> {
		return this._http.get(this.apiUrl + "GetDetail/" + id).map(res => res.json());
	}

	PostImage(image): Observable<any> {
		return this._http.post(this.apiUrl + "Post", image, this.options).map(res => res.json());
	}

	UpdateImage(data): Observable<any> {
		return this._http.patch(this.apiUrl + "Patch", data, this.options).map(res => res.json());
	}

	DeleteImage(id): Observable<any> {
		return this._http.delete(this.apiUrl + "Delete/" + id,  this.options).map(res => res.json());
	}

	UploadImage(file: string): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
		headers.delete("Authorization");
		headers.append("Authorization", ClientID);
		let options = new RequestOptions({ headers: headers });
		return this._http.post(imgur, file, options).map(res => res.json());
	}
}