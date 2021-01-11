import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaDetalleProductoComponent } from './ficha-detalle-producto.component';

describe('FichaDetalleProductoComponent', () => {
  let component: FichaDetalleProductoComponent;
  let fixture: ComponentFixture<FichaDetalleProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaDetalleProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaDetalleProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
