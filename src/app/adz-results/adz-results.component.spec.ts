import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzResultsComponent } from './adz-results.component';

describe('AdzResultsComponent', () => {
  let component: AdzResultsComponent;
  let fixture: ComponentFixture<AdzResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
