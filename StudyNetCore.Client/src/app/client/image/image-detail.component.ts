import { ArtistService } from '../artist/artist.service';
import { ImageService } from './image.service';
import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

declare let $: any;

@Component({
	selector: 'app-image',
	templateUrl: './image-detail.component.html',
	styleUrls: ['./image-detail.component.css'],
	providers: [ImageService, ArtistService]
})
export class ImageDetailComponent implements OnInit, OnDestroy {
	public image: any;
	public artist: any;
	public subscription: Subscription;

	constructor(private _image: ImageService, private activatedRoute: ActivatedRoute, private _artistSrv: ArtistService) {
		this.artist = {};
		this.image = {};
	}

	ngOnInit() {
		this.subscription = this.activatedRoute.params.subscribe(params => {
			this.loadData(params['id']);
		});
		$('#cp7').colorpicker({
			color: '#ffaa00',
			container: true,
			inline: true
		}).on('changeColor', function (e) {
			document.getElementById("onwallbackground").style.backgroundColor = e.color.toString('rgba');
		});
	}

	addToCart(id) {
		let cart: any;
		cart = JSON.parse(localStorage.getItem('cart'));
		if (cart) {
			let index = cart.products.findIndex(el => el.id === id);
			index >= 0 ? cart.products[index].quantity++ : cart.products.push(Object.assign({}, this.image, { quantity: 1 }));
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			cart = {};
			cart.products = [];
			cart.products.push(Object.assign({}, this.image, { quantity: 1 }));
			localStorage.setItem('cart', JSON.stringify(cart));
		}
	}

	private loadData(id) {
		this._image.GetImageDetail(id).subscribe(res => {
			this.image = res;
			$('#product-detail-cover-background').css("background-image", "linear-gradient(transparent, white),url('" + res.imgPath + "')");
			this._artistSrv.GetArtistDetail(res.artistId).subscribe(artist => {
				this.artist = artist;
			}, err => console.log(err));
		}, err => {
			console.log(err);
		});
	}

	private changeFurniture(srcImg) {
		document.getElementById("onwallfurniture").setAttribute('src', srcImg);
	}

	ngOnDestroy() {
		this.subscription.unsubscribe();
	}
}