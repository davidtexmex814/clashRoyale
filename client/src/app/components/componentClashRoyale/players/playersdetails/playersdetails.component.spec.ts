import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersdetailsComponent } from './playersdetails.component';

describe('PlayersdetailsComponent', () => {
  let component: PlayersdetailsComponent;
  let fixture: ComponentFixture<PlayersdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
