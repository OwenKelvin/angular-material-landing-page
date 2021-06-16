import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AboutDirective } from "./about/about.directive";
import { ContactComponent } from "./contact/contact.component";
import { BlogComponent } from "./blog/blog.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PricingComponent } from "./pricing/pricing.component";
import { HeadingComponent } from "./heading/heading.component";
import { Material2Module } from "./material-2/material-2.module";
import { MatCarouselModule } from "./mat-carousel/mat-carousel.module";
import { AboutComponent } from "./about/about.component";

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        Material2Module,
        BrowserAnimationsModule,
        MatCarouselModule
      ],
      declarations: [
        AppComponent,
        AboutDirective,
        ContactComponent,
        BlogComponent,
        PortfolioComponent,
        PricingComponent,
        HeadingComponent,
        AboutComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
