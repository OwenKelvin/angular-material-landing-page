import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { PricingComponent } from './pricing.component';
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatTableModule } from "@angular/material/table";

describe('PricingComponent', () => {
  let component: PricingComponent;
  let fixture: ComponentFixture<PricingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MatTabsModule,
        FlexLayoutModule,
        BrowserAnimationsModule,
        MatTableModule
      ],
      declarations: [PricingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
