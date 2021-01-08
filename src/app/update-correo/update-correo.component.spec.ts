import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCorreoComponent } from './update-correo.component';

describe('UpdateCorreoComponent', () => {
  let component: UpdateCorreoComponent;
  let fixture: ComponentFixture<UpdateCorreoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCorreoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
