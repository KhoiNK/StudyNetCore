import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-client',
	templateUrl: './client.component.html',
	styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
	private isToggled: boolean;
	public toggleButton: Element;
	public toggleSideBar:boolean;
	private products: any[];

	constructor() {
		this.toggleButton = document.getElementsByClassName('navbar-toggle')[0];
		this.isToggled = false;
		this.toggleSideBar = false;
	}

	ngOnInit() {

	}

	ngAfterViewInit() {
		var width = window.innerWidth;
		if (width < 1100) {
			var mobile_nav = document.getElementById("mobile_nav");
			mobile_nav.removeAttribute('hidden');
			document.getElementById('navbarsmallsize').removeAttribute('hidden');
			document.getElementById('nav_search').removeAttribute('hidden');
			document.getElementById('cus_sidebar').removeAttribute('hidden');
		} else {
			document.getElementById('navbarsmallsize').hidden = true;
		}

		var width = window.innerWidth;
		if (width < 1100) {
			var mobile_nav = document.getElementById("mobile_nav");
			mobile_nav.removeAttribute('hidden');
			document.getElementById('navbarsmallsize').removeAttribute('hidden');
			document.getElementById('nav_search').removeAttribute('hidden');
			document.getElementById('cus_sidebar').removeAttribute('hidden');
			document.getElementById('sidebar-icon-collapse').hidden = true;
		} else {
			document.getElementById('navbarsmallsize').hidden = true;
			document.getElementById('sidebar-icon-collapse').removeAttribute('hidden');
		}
		// $('#sidebar-icon-collapse').click(function 
	}

	collapseSidebar() {
		this.toggleSideBar = !this.toggleSideBar;
		if (this.toggleSideBar) {
			var iconlist = document.getElementsByClassName("sidebar-icon");
			var sidebarLinkList = document.getElementsByClassName("sidebar-link");
			for (var i = 0; i < iconlist.length; i++) {
				iconlist[i].classList.add("sidebar-icon-collapse");
			};
			var sidebar = document.getElementById("cus_sidebar");
			sidebar.classList.add("sidebar-collapse");
			var bodyContent = document.getElementsByClassName("main-panel")[0];
			bodyContent.classList.add("body-container");
		}
		else {
			var iconlist = document.getElementsByClassName("sidebar-icon");
			var sidebarLinkList = document.getElementsByClassName("sidebar-link");
			for (var i = 0; i < iconlist.length; i++) {
				iconlist[i].classList.remove("sidebar-icon-collapse");
			};
			var sidebar = document.getElementById("cus_sidebar");
			sidebar.classList.remove("sidebar-collapse");
			var bodyContent = document.getElementsByClassName("main-panel")[0];
			bodyContent.classList.remove("body-container");
		}
	}
}
