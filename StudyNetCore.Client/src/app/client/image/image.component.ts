import { ImageService } from './image.service';
import { Component, OnInit } from '@angular/core';

declare let $: any;

@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.css'],
	providers: [ImageService]
})
export class ImageComponent implements OnInit {
	public images: any[];
	private pageIndex: number
	constructor(private _imgSrv: ImageService) {
		this.pageIndex = 1;
		this.images = [];
	}

	ngOnInit() {
		this.loadData();
	}

	loadData() {
		this._imgSrv.GetImages(this.pageIndex).subscribe(res => {
			if (this.pageIndex === 1) {
				this.images = res;
				var random = Math.floor((Math.random() * res.length) + 1);
				$('#product-detail-cover-background').css('background-image', 'linear-gradient(transparent, white), url("' + res[random - 1].imgPath + '")');
			} else {
				res.forEach(el => this.images.push(el));
			};
		}, err => console.log(err));
	}

	seeMore() {
		this.pageIndex++;
		this.loadData();
	}
}
