import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzBookOverviewComponent } from './adz-book-overview.component';

describe('AdzBookOverviewComponent', () => {
  let component: AdzBookOverviewComponent;
  let fixture: ComponentFixture<AdzBookOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzBookOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzBookOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
