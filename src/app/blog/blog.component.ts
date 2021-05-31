import { Component } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { Orientation } from '../mat-carousel/carousel';

@Component({
	selector: 'app-blog',
	templateUrl: './blog.component.html',
	styleUrls: ['./blog.component.css']
})
export class BlogComponent {

	constructor() { }
	public slidesList = new Array<never>(5);
	public showContent = false;
  
	public parentHeight = 'auto';
	public timings = '250ms ease-in';
	public autoplay = true;
	public interval = 5000;
	public loop = true;
	public hideArrows = false;
	public hideIndicators = false;
	public color: ThemePalette = 'accent';
	public maxWidth = 'auto';
	public maintainAspectRatio = true;
	public proportion = 25;
	public slideHeight = '200px';
	public slides = this.slidesList.length;
	public overlayColor = '#00000040';
	public hideOverlay = false;
	public useKeyboard = true;
	public useMouseWheel = false;
	public orientation: Orientation = 'ltr';
	public blogs = [
		{
			src: 'assets/img/6.jpg',
			title: 'Article Title #1'
		}
	]


}
