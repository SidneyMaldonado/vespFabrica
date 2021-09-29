import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFuncaoVendaPrecoComponent } from './view-funcao-venda-preco.component';

describe('ViewFuncaoVendaPrecoComponent', () => {
  let component: ViewFuncaoVendaPrecoComponent;
  let fixture: ComponentFixture<ViewFuncaoVendaPrecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewFuncaoVendaPrecoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewFuncaoVendaPrecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
