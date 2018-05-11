import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesdetailsComponent } from './leaguesdetails.component';

describe('LeaguesdetailsComponent', () => {
  let component: LeaguesdetailsComponent;
  let fixture: ComponentFixture<LeaguesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaguesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
