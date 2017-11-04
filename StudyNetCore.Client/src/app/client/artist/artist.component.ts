import { ArtistService } from './artist.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-artist',
	templateUrl: './artist.component.html',
	styleUrls: ['./artist.component.css'],
	providers: [ArtistService]
})
export class ArtistComponent implements OnInit {
	public artist: any;
	public subscription: Subscription;

	constructor(private _artistSrv: ArtistService, private activatedRoute: ActivatedRoute) {
		this.artist = {};
	}

	ngOnInit() {
		this.subscription = this.activatedRoute.params.subscribe(params => {
			this.loadData(params['id']);
		});
	}

	loadData(id){
		this._artistSrv.GetArtistDetail(id).subscribe(res => {
			this.artist = res;
		}, err => console.log(err));
	}
}
