import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { MatCarouselModule } from 'carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { PricingComponent } from './pricing/pricing.component';
import { Material2Module } from './material-2/material-2.module';
import { ScrollModule } from './scroll/scroll.module';
import { HeadingComponent } from './heading/heading.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutDirective } from './about/about.directive';
import { MatCarouselModule } from './mat-carousel/mat-carousel.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactDialogComponent,
    ContactComponent,
    BlogComponent,
    PortfolioComponent,
    AboutComponent,
    PricingComponent,
    HeadingComponent,
    AboutDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    Material2Module,
    ScrollModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
