import { ArtistService } from './../artist/artist.services';
import { ImageService } from './image.service';
import { Component, OnInit } from '@angular/core';

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
	private isEdit: boolean

	constructor(private imageSrv: ImageService, private _artistSrv: ArtistService) {
		this.pageIndex = 1;
		this.image = {};
		this.isTableCollapse = false;
		this.isEdit = false;
	}

	ngOnInit() {
		this.LoadData();
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

	isAddNew(){
		this.isEdit = !this.isEdit;
	}

	addNewClick() {
		let table = document.getElementById('images-table');
		let addform = document.getElementById('create-image-form');
		if(!this.isEdit){
			this.image = {};
			this.isEdit = false;
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

	editClick(id){
		let index = this.images.findIndex(e => e.id === id);
		let image = this.images[index];
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
		this.isEdit = true;
		document.getElementById('btn-addnew').click();
		
	}

	Create() {
		let file = document.getElementById('image')['files'][0];
		if (file) {
			let fr = new FileReader();
			fr.readAsBinaryString(file);
			fr.onload = () => {
				this.imageSrv.UploadImage(btoa(fr.result)).subscribe(res => {
					console.log(res);
					this.image.ImgPath = res.data.link;
					this.imageSrv.PostImage(this.image).subscribe(res => {
						alert('Add succeed');
						this.LoadData();
					}, err => {
						console.log(err);
					});
				}, err => {
					alert('Add failed.');
					console.log(err);
				});
			}
		} else {
			alert('Inset image please');
			return;
		}
	}
}
