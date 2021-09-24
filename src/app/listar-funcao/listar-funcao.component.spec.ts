import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarFuncaoComponent } from './listar-funcao.component';

describe('ListarFuncaoComponent', () => {
  let component: ListarFuncaoComponent;
  let fixture: ComponentFixture<ListarFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFuncaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
