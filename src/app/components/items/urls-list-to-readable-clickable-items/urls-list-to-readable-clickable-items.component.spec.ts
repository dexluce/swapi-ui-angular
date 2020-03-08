import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlsListToReadableClickableItemsComponent } from './urls-list-to-readable-clickable-items.component';

describe('UrlsListToReadableClickableItemsComponent', () => {
  let component: UrlsListToReadableClickableItemsComponent;
  let fixture: ComponentFixture<UrlsListToReadableClickableItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlsListToReadableClickableItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlsListToReadableClickableItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
