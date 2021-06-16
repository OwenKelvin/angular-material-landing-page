import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatCarouselComponent } from './mat-carousel.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HammerModule } from '@angular/platform-browser';

describe('MatCarouselComponent', () => {
  let component: MatCarouselComponent;
  let fixture: ComponentFixture<MatCarouselComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, HammerModule],
      declarations: [MatCarouselComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
