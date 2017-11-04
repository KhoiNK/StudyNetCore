import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { OrderComponent } from './order/order.component';
import { ArtistComponent } from './artist/artist.component';
import { ImageDetailComponent } from './image/image-detail.component';
import { ImageComponent } from './image/image.component';
import { ClientComponent } from './client.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
	{
		path: '',
		component: ClientComponent,
		data: {
			title: 'Client'
		},
		children: [
			{ path: '', component: HomepageComponent },
			{ path: 'images', component: ImageComponent },
			{ path: 'image-detail/:id', component: ImageDetailComponent },
			{ path: 'artist-detail/:id', component: ArtistComponent },
			{ path: 'order', component: OrderComponent },
		]
	},
	//   { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
	imports: [
		CommonModule,
		RouterModule.forChild(routes)
	],
	exports: [
	],
})
export class ClientRoutingModule { }
