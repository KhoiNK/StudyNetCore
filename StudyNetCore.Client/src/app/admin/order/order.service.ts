import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globalConst from "../../global-constant";

@Injectable()
export class OrderService {
	private apiUrl = globalConst.apiUrl + "Order/";
	private options: any;
	private headers: any;

	constructor(private _http: Http, private _authHttp: AuthHttp) {
		this.headers = new Headers({ 'Content-Type': 'application/json' });
		let token = JSON.parse(sessionStorage.getItem('token'));
		this.headers.append('Authorization', 'Bearer ' + token);
		this.options = new RequestOptions({ headers: this.headers });
	}

	GetOrder(pageIndex): Observable<any[]> {
		return this._http.get(this.apiUrl + "Get/" + pageIndex, this.options).map(res => res.json());
	}

	PostOrder(image): Observable<any> {
		return this._http.post(this.apiUrl + "Post", image, this.options).map(res => res.json());
	}

	UpdateOrder(data): Observable<any> {
		return this._authHttp.patch(this.apiUrl + "Patch", data, this.options).map(res => res.json());
	}

	DeleteOrder(id): Observable<any> {
		return this._authHttp.delete(this.apiUrl + "Delete", this.options).map(res => res.json());
	}

}