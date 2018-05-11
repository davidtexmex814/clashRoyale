import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArenasdetailsComponent } from './arenasdetails.component';

describe('ArenasdetailsComponent', () => {
  let component: ArenasdetailsComponent;
  let fixture: ComponentFixture<ArenasdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArenasdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArenasdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
