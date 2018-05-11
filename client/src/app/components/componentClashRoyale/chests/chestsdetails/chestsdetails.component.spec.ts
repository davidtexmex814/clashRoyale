import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestsdetailsComponent } from './chestsdetails.component';

describe('ChestsdetailsComponent', () => {
  let component: ChestsdetailsComponent;
  let fixture: ComponentFixture<ChestsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
