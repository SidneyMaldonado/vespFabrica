import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRoupaTecidoComponent } from './listar-roupa-tecido.component';

describe('ListarRoupaTecidoComponent', () => {
  let component: ListarRoupaTecidoComponent;
  let fixture: ComponentFixture<ListarRoupaTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRoupaTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRoupaTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
