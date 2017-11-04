import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ClientComponent } from './client.component'

const routes: Routes = [
	{
		path: '',
		component: ClientComponent,
		data: {
			title: 'Admin'
		},
		children: [
			// { path: '', component: UserLogin },
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
