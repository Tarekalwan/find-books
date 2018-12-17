import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdzSearchComponent } from './adz-search.component';

describe('AdzSearchComponent', () => {
  let component: AdzSearchComponent;
  let fixture: ComponentFixture<AdzSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdzSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdzSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
