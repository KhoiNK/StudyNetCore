import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthHttp, AuthConfig } from 'angular2-jwt';
import {CurrencyPipe} from '@angular/common'

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
// import { AdminComponent } from './admin/admin.component';

export function authHttpServiceFactory(http: Http, options: RequestOptions) {
	return new AuthHttp(new AuthConfig({
		tokenName: 'token',
		tokenGetter: (() => sessionStorage.getItem('token')),
		globalHeaders: [{ 'Content-Type': 'application/json' }],
		headerName: 'Authorization',
		headerPrefix: 'Bearer'
	}), http, options);
}

@NgModule({
	declarations: [
		AppComponent,
		ClientComponent,
		// AdminComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		RouterModule,
		AppRoutingModule,
	],
	providers: [{
		provide: AuthHttp,
		useFactory: authHttpServiceFactory,
		deps: [Http, RequestOptions],
	},
	{
		provide: LocationStrategy,
		useClass: HashLocationStrategy
	}
	],
	bootstrap: [AppComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
