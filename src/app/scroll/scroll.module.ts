import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from './scroll.directive';


@NgModule({
  declarations: [
    ScrollDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ScrollDirective
  ]
})
export class ScrollModule {
}
