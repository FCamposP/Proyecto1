import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarprodComponent } from './agregarprod.component';

describe('AgregarprodComponent', () => {
  let component: AgregarprodComponent;
  let fixture: ComponentFixture<AgregarprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
