import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globalConst from "../../global-constant";

@Injectable()
export class UserService {
	private apiUrl = globalConst.apiUrl + 'User/';

	constructor(private _http: Http) {

	}

	Login(user): Observable<any> {
		let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
		return this._http.post(this.apiUrl + "Login", user, options).map(res => res.json());
	}
}