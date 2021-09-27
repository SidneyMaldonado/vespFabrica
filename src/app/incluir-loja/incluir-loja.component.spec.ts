import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirLojaComponent } from './incluir-loja.component';

describe('IncluirLojaComponent', () => {
  let component: IncluirLojaComponent;
  let fixture: ComponentFixture<IncluirLojaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirLojaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
