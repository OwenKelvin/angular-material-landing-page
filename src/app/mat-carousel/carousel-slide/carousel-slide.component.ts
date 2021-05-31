import { ListKeyManagerOption } from '@angular/cdk/a11y';
import {
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';

import { MatCarouselSlide } from './carousel-slide';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-mat-carousel-slide',
  templateUrl: './carousel-slide.component.html',
  styleUrls: ['./carousel-slide.component.scss'],
  animations: [
		trigger('fadeInOut', [
			state('*', style({
				height: '200px',
				opacity: 1,
			})),
			state('void', style({
				height: '100px',
				opacity: 0.5,
				backgroundColor: 'greenyellow'
			})),
			transition(':leave', [
				animate('200ms')
			]),
			transition(':enter', [
				animate('300ms')
			]),
		])
	]
})
export class MatCarouselSlideComponent
  implements ListKeyManagerOption, MatCarouselSlide, OnInit {
  @Input() public image: SafeStyle = '';
  @Input() public overlayColor = '#00000040';
  @Input() public hideOverlay = false;
  @Input() public disabled = false; // implements ListKeyManagerOption

  @ViewChild(TemplateRef) public templateRef: TemplateRef<any> | undefined;
    
  constructor(public sanitizer: DomSanitizer) {
  }

  public ngOnInit(): void {
    if (this.image) {
      this.image = this.sanitizer.bypassSecurityTrustStyle(`url("${this.image}")`);
    }
  }
}
