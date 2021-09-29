import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendaLojaComponent } from './view-venda-loja.component';

describe('ViewVendaLojaComponent', () => {
  let component: ViewVendaLojaComponent;
  let fixture: ComponentFixture<ViewVendaLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVendaLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewVendaLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
