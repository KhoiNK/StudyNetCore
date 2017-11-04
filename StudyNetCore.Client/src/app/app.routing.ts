import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'admin',
		loadChildren: './admin/admin.module#AdminModule'
	},
	{
		path: 'client',
		loadChildren: './client/client.module#ClientModule'
	},
	{ path: '', redirectTo: 'client', pathMatch: 'full' }
];

@NgModule({
	imports: [
		CommonModule,
		BrowserModule,
		RouterModule.forRoot(routes)
	],
	exports: [
	],
})
export class AppRoutingModule { }
