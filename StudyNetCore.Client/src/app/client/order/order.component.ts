import { GlobalService } from './../../global.service';
import { OrderService } from './../../admin/order/order.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.css'],
	providers: [OrderService]
})
export class OrderComponent implements OnInit {
	public images: any[];
	public total: number;
	public order: any;
	constructor(private _router: Router, private _orderSrv: OrderService, private _gloSrv: GlobalService) {
		this.total = 0;
		this.images = [];
		this.order = {};
	}

	ngOnInit() {
		if(localStorage.getItem('cart')){
			this.images = JSON.parse(localStorage.getItem('cart')).products;
			this.countTotal(this.images);
		}
	}

	countTotal(list) {
		this.total = 0;
		list.forEach(el => {
			this.total += el.quantity * el.price;
		});
	}

	changeQuantity(id) {
		let quantity = document.querySelector('#price' + id)['value'];
		let index = this.images.findIndex(el => el.id === id);
		this.images[index].quantity = parseInt(quantity);
		this.countTotal(this.images);
		this._gloSrv.changeMess('success');
	}

	removeItem(id) {
		let result = confirm('Are you sure to delete this?');
		if (result) {
			let index = this.images.findIndex(el => el.id === id);
			this.images.splice(index, 1);
			this.countTotal(this.images);
			this._gloSrv.changeMess('success');
		}
		else {
			return;
		}
	}

	removeOrder() {
		let result = confirm('Are you sure to delete?');
		if (result) {
			localStorage.removeItem('cart');
			this.images = [];
			this._gloSrv.changeMess('success');
			this._router.navigate(['/client']);
		}
		else {
			return;
		}
	}

	submitOrder() {
		if(!this.order.Name && !this.order.Email && !this.order.Phone && !this.order.Address){
			this._gloSrv.changeMess('error');
			return;
		}
		let order: any;
		order = this.order;
		order.Details = [];
		this.images.forEach(el => {
			order.Details.push({ ProductId: el.id, Quantity: el.quantity });
		});
		console.log(order);
		this._orderSrv.PostOrder(order).subscribe(res => {
			if (res) {
				this._gloSrv.changeMess('success');
				this._router.navigate(['/client']);
				localStorage.removeItem('cart');
			}
		}, err => {
			this._gloSrv.changeMess('success');
			this._router.navigate(['/client']);
			localStorage.removeItem('cart');
		});
	}
}
