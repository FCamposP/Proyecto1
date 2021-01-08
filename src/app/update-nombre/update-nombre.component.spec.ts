import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNombreComponent } from './update-nombre.component';

describe('UpdateNombreComponent', () => {
  let component: UpdateNombreComponent;
  let fixture: ComponentFixture<UpdateNombreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNombreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNombreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
