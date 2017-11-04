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

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		ClientRoutingModule
	],
	declarations: [
	ImageComponent,
	ArtistComponent,
	OrderComponent,
	HomepageComponent],
	providers: [
	],
	bootstrap: [ClientComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClientModule { }
