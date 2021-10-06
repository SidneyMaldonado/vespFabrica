import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTecidoComponent } from './listar-tecido.component';

describe('ListarTecidoComponent', () => {
  let component: ListarTecidoComponent;
  let fixture: ComponentFixture<ListarTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
  it('should get', ()=> expect(component.tecidos.length).toBeGreaterThan(0))
});


