import { Router } from '@angular/router';
import { GlobalService } from './../../global.service';
import { OrderService } from './order.service';
import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css'],
	providers: [OrderService]
})
export class OrderComponent implements OnInit {
	public orders: any[];
	public details: any[];
	constructor(private _orderSrv: OrderService, private _globalSrv: GlobalService, private _router: Router) {
		this.orders = [];
		this.details = [];
	}

	ngOnInit() {
		let result = tokenNotExpired('token');
		result ? this.loadAll() : this._router.navigate(['/admin']);
	}

	loadAll() {
		this._orderSrv.GetAll().subscribe(res => {
			this.orders = res;
		}, err => console.log(err));
	}

	loadDetail(id) {
		this._orderSrv.GetOrderDetail(id).subscribe(res => {
			this.details = res;
		}, err => console.log(err));
	}

	changeStatus(id, statusId) {
		let index = this.orders.findIndex(el => el.id === id);
		let order = {
			Id: this.orders[index].id,
			Name: this.orders[index].name,
			Address: this.orders[index].address,
			Phone: this.orders[index].phone,
			Note: this.orders[index].note,
			StatusId: statusId,
			Email: this.orders[index].email
		};
		this._orderSrv.UpdateOrder(order).subscribe(res => {
			if (res) {
				this._globalSrv.changeMess('success');
				this.loadAll();
				this.details = [];
			}
		}, err => {
			this._globalSrv.changeMess('error');
			console.log(err);
		});
	}
}
