import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwapiListLayoutComponent } from './swapi-list-layout.component';

describe('SwapiListLayoutComponent', () => {
  let component: SwapiListLayoutComponent;
  let fixture: ComponentFixture<SwapiListLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwapiListLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwapiListLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
