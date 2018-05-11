import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FondohomeComponent } from './fondohome.component';

describe('FondohomeComponent', () => {
  let component: FondohomeComponent;
  let fixture: ComponentFixture<FondohomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FondohomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FondohomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
