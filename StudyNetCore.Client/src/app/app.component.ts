import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { GlobalService } from 'app/global.service';

declare const $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

	constructor(public location: Location, private _gloSrv: GlobalService) { }

	ngOnInit() {
		$.material.options.autofill = true;
		$.material.init();

		this._gloSrv.globalMess$.subscribe(res => {
			switch (res) {
				case 'success':
					document.getElementById('succ-noti-mess').innerText = 'Action succeed!';
					document.getElementById('succ-noti').classList.add('show-noti');
					setTimeout(() => {
						document.getElementById('succ-noti').classList.remove('show-noti');
					}, 2000);
					return;
				case 'error':
					document.getElementById('err-noti-mess').innerText = 'Action failed!';
					document.getElementById('err-noti').classList.add('show-noti');
					setTimeout(() => {
						document.getElementById('err-noti').classList.remove('show-noti');
					}, 2000);
					return;
				default:
					return;
			}
		})
	}
}
