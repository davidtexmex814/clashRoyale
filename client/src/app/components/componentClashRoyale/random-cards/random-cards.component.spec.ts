import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomCardsComponent } from './random-cards.component';

describe('RandomCardsComponent', () => {
  let component: RandomCardsComponent;
  let fixture: ComponentFixture<RandomCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
