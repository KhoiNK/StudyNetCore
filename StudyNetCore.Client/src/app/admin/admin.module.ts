import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AdminRoutingModule } from './admin.routing';
import { ComponentsModule } from './components/components.module';
import { AdminComponent } from './admin.component';
import { AuthGuard } from './auth.service';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { UserLogin } from './user-profile/user-login.component';
import { ImageComponent } from './image/image.component';
import { OrderComponent } from './order/order.component';
// import {SidebarComponent} from './components/sidebar/sidebar.component'

@NgModule({
	imports: [
		FormsModule,
		CommonModule,
		ReactiveFormsModule,
		RouterModule,
		ComponentsModule,
		AdminRoutingModule
	],
	declarations: [
		AdminComponent,
		UserProfileComponent,
		TableListComponent,
		UserLogin,
		ImageComponent,
		OrderComponent,
		// SidebarComponent
	],
	providers: [
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
		AuthGuard
	],
	bootstrap: [AdminComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminModule { }
