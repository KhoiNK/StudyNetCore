import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
	public images: any[];
	public total: number;
  constructor() { 
	  this.total = 0;
	  this.images = [];
  }

  ngOnInit() {
	  this.images = JSON.parse(localStorage.getItem('cart')).products;
	  this.images.forEach(el => {
		this.total += el.quantity * el.price;
	  });
  }

}
