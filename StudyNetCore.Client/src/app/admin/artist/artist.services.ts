import { RequestOptions, Headers, Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthHttp } from 'angular2-jwt/angular2-jwt';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import * as globalConst from "../../global-constant";

@Injectable()
export class ArtistService{
	private apiUrl = globalConst.apiUrl + 'Artist/';
	private options: any;

	constructor(private _authHttp: AuthHttp, private _http: Http){
		let headers = new Headers({ 'Content-Type': 'application/json' });
        this.options = new RequestOptions({ headers: headers });
	}

	getAllArtist(): Observable<any[]>{
		return this._http.get(this.apiUrl + 'Get', this.options).map(res => res.json());
	}
}
