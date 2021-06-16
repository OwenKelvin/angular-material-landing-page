import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCarouselComponent } from './mat-carousel.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HammerModule } from '@angular/platform-browser';
import { MatCarouselSlideComponent } from './carousel-slide/carousel-slide.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    MatCarouselComponent,
    MatCarouselSlideComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    HammerModule,
    BrowserAnimationsModule
  ],
  exports: [
    MatCarouselComponent,
    MatCarouselSlideComponent,
    BrowserAnimationsModule
  ]
})
export class MatCarouselModule {
}
