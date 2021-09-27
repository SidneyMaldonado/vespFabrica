import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirTecidoComponent } from './incluir-tecido.component';

describe('IncluirTecidoComponent', () => {
  let component: IncluirTecidoComponent;
  let fixture: ComponentFixture<IncluirTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
