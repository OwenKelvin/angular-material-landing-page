import { ElementRef } from '@angular/core';
import { AboutDirective } from './about.directive';

describe('AboutDirective', () => {
  it('should create an instance', () => {
    const directive = new AboutDirective(new ElementRef(8));
    expect(directive).toBeTruthy();
  });
});
