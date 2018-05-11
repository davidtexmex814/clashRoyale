import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChestsComponent } from './chests.component';

describe('ChestsComponent', () => {
  let component: ChestsComponent;
  let fixture: ComponentFixture<ChestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
