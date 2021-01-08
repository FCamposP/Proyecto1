import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTelefonoComponent } from './update-telefono.component';

describe('UpdateTelefonoComponent', () => {
  let component: UpdateTelefonoComponent;
  let fixture: ComponentFixture<UpdateTelefonoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTelefonoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTelefonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
