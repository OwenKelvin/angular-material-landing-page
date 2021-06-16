import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { HammerModule } from '@angular/platform-browser';
import { Material2Module } from '../material-2/material-2.module';
import { MatCarouselModule } from '../mat-carousel/mat-carousel.module';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        Material2Module,
        FlexLayoutModule,
        MatCarouselModule,
        HammerModule
      ],
      declarations: [BlogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
