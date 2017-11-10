import { GlobalService } from './../../global.service';
import { Router, CanActivate } from '@angular/router';
import { ArtistService } from './../artist/artist.services';
import { ImageService } from './image.service';
import { Component, OnInit } from '@angular/core';
import { tokenNotExpired } from 'angular2-jwt';

@Component({
	selector: 'app-image',
	templateUrl: './image.component.html',
	styleUrls: ['./image.component.css'],
	providers: [ImageService, ArtistService]
})

export class ImageComponent implements OnInit {
	public images: any[];
	public pageIndex: number;
	public image: any;
	public artists: any[];
	private isTableCollapse: boolean;
	private isEdit: boolean;

	constructor(private imageSrv: ImageService,
		private _artistSrv: ArtistService,
		private _router: Router,
		private _gloSrv: GlobalService) {
		this.pageIndex = 1;
		this.image = {};
		this.isTableCollapse = false;
		this.isEdit = false;
	}

	ngOnInit() {
		let result = tokenNotExpired('token');
		result ? this.LoadData() : this._router.navigate(['/admin']);
	}

	LoadData() {
		this.imageSrv.GetImages(this.pageIndex).subscribe(res => {
			this.images = res;
		}, err => {
			console.log(err);
		});
		this._artistSrv.getAllArtist().subscribe(res => {
			this.artists = res;
		}, err => {
			console.log(err);
		});
	}

	PageChange(command) {
		if (command === 'next') {
			this.pageIndex++;
			this.LoadData();
			return;
		}
		if (command === 'previous') {
			this.pageIndex--;
			this.LoadData();
			return;
		}
	}

	addNewClick() {
		let table = document.getElementById('images-table');
		let addform = document.getElementById('create-image-form');
		if (!this.isEdit) {
			this.image = {};
			// this.isEdit = !this.isEdit;
		}

		if (!this.isTableCollapse) {
			table.classList.add('col-md-6');
			table.classList.remove('col-md-12');
			addform.removeAttribute('hidden');
		}
		else {
			table.classList.add('col-md-12');
			table.classList.remove('col-md-6');
			addform.setAttribute('hidden', 'true');
		}
		this.isTableCollapse = !this.isTableCollapse;
	}

	editClick(id) {
		let index = this.images.findIndex(e => e.id === id);
		let image = this.images[index];
		if (this.isEdit) {
			this.image = Object.assign({}, image, {
				Id: image.id,
				Name: image.name,
				Description: image.description,
				ArtistId: image.artistId,
				ImgPath: image.imgPath,
				Height: image.height,
				Width: image.width,
				Price: image.price
			});
		} else {
			this.image = Object.assign({}, image, {
				Id: image.id,
				Name: image.name,
				Description: image.description,
				ArtistId: image.artistId,
				ImgPath: image.imgPath,
				Height: image.height,
				Width: image.width,
				Price: image.price
			});
			this.isEdit = !this.isEdit;
			document.getElementById('btn-addnew').click();
		}
	}

	onSubmit() {
		if(!this.image.Name && !this.image.Description && !this.image.ArtistId && !this.image.Price && !this.image.Height && !this.image.Width){
			this._gloSrv.changeMess('error');
			return;
		}
		let file = document.getElementById('image')['files'][0];
		if (file) {
			let fr = new FileReader();
			fr.readAsBinaryString(file);
			fr.onload = () => {
				this.imageSrv.UploadImage(btoa(fr.result)).subscribe(res => {
					console.log(res);
					this.image.ImgPath = res.data.link;
					if (!this.isEdit) {
						this.Create();
					} else {
						this.Update();
					}
				}, err => {
					this._gloSrv.changeMess('error');
					console.log(err);
				});
			}
		} else {
			if (this.isEdit) {
				this.Update();
			} else {
				alert('Insert image please');
				return;
			}
		}
	}

	Create() {
		
		this.imageSrv.PostImage(this.image).subscribe(res => {
			this._gloSrv.changeMess('success');
			this.LoadData();
		}, err => {
			this._gloSrv.changeMess('error');
			console.log(err);
		});
	}

	Update() {
		this.imageSrv.UpdateImage(this.image).subscribe(res => {
			if (res) {
				this._gloSrv.changeMess('success');
				let index = this.images.findIndex(el => el.Id === this.image.Id);
				this.LoadData();
			}
		}, err => {
			this._gloSrv.changeMess('error');
			console.log(err);
		});
	}

	deleteImage(id) {
		console.log(this.image);
		console.log('id ', id);
		let result = confirm('Are you sure to delete this image?');
		if (result) {
			this.imageSrv.DeleteImage(id).subscribe(res => {
				if (res) {
					let index = this.images.findIndex(el => el.id === id);
					this.images.splice(index, 1);
					this._gloSrv.changeMess('success');
				}
			}, err => {
				this._gloSrv.changeMess('error');
				console.log(err);
			});
		}
		return;
	}
}
