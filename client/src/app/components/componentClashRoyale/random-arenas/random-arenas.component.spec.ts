import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomArenasComponent } from './random-arenas.component';

describe('RandomArenasComponent', () => {
  let component: RandomArenasComponent;
  let fixture: ComponentFixture<RandomArenasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomArenasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomArenasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
