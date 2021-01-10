import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordarProdComponent } from './recordar-prod.component';

describe('RecordarProdComponent', () => {
  let component: RecordarProdComponent;
  let fixture: ComponentFixture<RecordarProdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecordarProdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordarProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
