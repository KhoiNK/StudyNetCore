import { Component, OnInit } from '@angular/core';
import { UserService } from './user-service'
import { Router } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
	selector: 'user-login',
	templateUrl: 'user-login.component.html',
	providers: [UserService]
})

export class UserLogin implements OnInit {
	public user: any;

	constructor(private userSrv: UserService, private router: Router) {
		this.user = {};
	}

	ngOnInit() {
		let isNotExpired = tokenNotExpired('token');
		if(isNotExpired) this.router.navigate(['admin/images']);
	}

	Login() {
		this.userSrv.Login(this.user).subscribe(res => {
			sessionStorage.setItem('token', JSON.stringify(res.access_token));
			sessionStorage.setItem('expired', JSON.stringify(res.expires_in));
			sessionStorage.setItem('user', JSON.stringify(res));
			this.router.navigate(['admin/images']);
		}, err => {
			console.log(err);
		});
	}
}