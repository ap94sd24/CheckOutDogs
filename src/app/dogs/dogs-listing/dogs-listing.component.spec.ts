import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DogsListingComponent } from './dogs-listing.component';

describe('DogsListingComponent', () => {
  let component: DogsListingComponent;
  let fixture: ComponentFixture<DogsListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DogsListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DogsListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
