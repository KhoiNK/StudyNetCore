import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientComponent } from './client.component';
import { ClientRoutingModule } from './client.routing';
import { ImageComponent } from './image/image.component';
import { ArtistComponent } from './artist/artist.component';
import { OrderComponent } from './order/order.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ImageDetailComponent } from './image/image-detail.component';

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		ClientRoutingModule
	],
	declarations: [
		ClientComponent,
		ImageComponent,
		ArtistComponent,
		OrderComponent,
		HomepageComponent,
		ImageDetailComponent
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
	],
	bootstrap: [ClientComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule { }
