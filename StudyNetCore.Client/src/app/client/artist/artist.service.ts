import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globalConst from "../../global-constant";

@Injectable()
export class ArtistService {
	private apiUrl = globalConst.apiUrl + "Artist/";
	private options: any;
	private headers: any;

	constructor(private _http: Http, private _authHttp: AuthHttp) {
		this.headers = new Headers({ 'Content-Type': 'application/json' });
		this.options = new RequestOptions({ headers: this.headers });
	}

	GetArtistDetail(id): Observable<any> {
		return this._http.get(this.apiUrl + "GetDetail/" + id, this.options).map(res => res.json());
	}
}