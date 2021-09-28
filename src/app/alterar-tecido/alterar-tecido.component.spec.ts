import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarTecidoComponent } from './alterar-tecido.component';

describe('AlterarTecidoComponent', () => {
  let component: AlterarTecidoComponent;
  let fixture: ComponentFixture<AlterarTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
