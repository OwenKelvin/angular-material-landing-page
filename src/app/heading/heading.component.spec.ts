import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HeadingComponent } from './heading.component';
import { FlexLayoutModule } from "@angular/flex-layout";

describe('HeadingComponent', () => {
  let component: HeadingComponent;
  let fixture: ComponentFixture<HeadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FlexLayoutModule],
      declarations: [HeadingComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
