import { ImageComponent } from './image/image.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './auth.service'

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserLogin } from './user-profile/user-login.component';
import { ComponentsModule } from './components/components.module'

const routes: Routes = [
	{
		path: '',
		component: AdminComponent,
		data: {
			title: 'Admin'
		},
		children: [
			{ path: '', component: UserLogin },
			{ path: 'user-profile', component: UserProfileComponent, canActivate: [AuthGuard] },
			{ path: 'images', component: ImageComponent, canActivate: [AuthGuard] },
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
export class AdminRoutingModule { }