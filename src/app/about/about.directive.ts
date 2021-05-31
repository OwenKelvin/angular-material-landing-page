import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAbout]'
})

export class AboutDirective {
 
  constructor(private el: ElementRef) { }
 
  @Input() defaultColor: string = 'red';
 
  @Input('appAbout') about: string | undefined = '';
 
  @HostListener('mouseenter') onMouseEnter() {
    this.setHoverEffect();
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.removeHoverEffect();
  }
 
  private setHoverEffect() {
    this.el.nativeElement.classList.add('about-hover-effect');
  }

  private removeHoverEffect() {
    this.el.nativeElement.classList.remove('about-hover-effect');
  }

}