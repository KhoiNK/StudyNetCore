import { ImageService } from './../image/image.service';
import { Component, OnInit } from '@angular/core';


declare let $ : any;

@Component({
	selector: 'app-homepage',
	templateUrl: './homepage.component.html',
	styleUrls: ['./homepage.component.css'],
	providers:[ImageService]
})
export class HomepageComponent implements OnInit {
	public images: any[];
	public sliderImgs: any[];

	constructor(private _imgsrv: ImageService) { 
		this.sliderImgs = [];
	}

	ngOnInit() {
		this.loadImages();
	}

	loadImages() {
		let artSlider = document.getElementById('art-slider');
		this._imgsrv.GetImages(1).subscribe(res => {
			this.images = res;
			for (let i = 0; i < 3; i++) {
				let random = Math.floor(Math.random() * res.length);
				let activeItem = `<div class="item active" >
				<img src="${res[random].imgPath}" class="slider-img img-responsive" />
			</div>`;
			let item = `<div class="item" >
			<img src="${res[random].imgPath}" class="slider-img img-responsive" />
		</div>`;
				i === 1 ? $('#slider-items').append(activeItem) : $('#slider-items').append(item);
            }
		}, err => {
			console.log(err);
		});
	}
}
