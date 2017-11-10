import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
	path: string;
	title: string;
	icon: string;
	class: string;
}
export const ROUTES: RouteInfo[] = [
	{ path: 'images', title: 'Dashboard', icon: 'dashboard', class: '' },
	{ path: 'order', title: 'Order', icon: 'person', class: '' },
];

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	menuItems: any[];

	constructor(private _router: Router) { }

	ngOnInit() {
		this.menuItems = ROUTES.filter(menuItem => menuItem);
	}
	isMobileMenu() {
		if ($(window).width() > 991) {
			return false;
		}
		return true;
	};

	logout() {
		sessionStorage.removeItem('token');
		sessionStorage.removeItem('expired');
		sessionStorage.removeItem('user');
		this._router.navigate(['/client']);
	}
}
