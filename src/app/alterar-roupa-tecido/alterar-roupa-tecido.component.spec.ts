import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarRoupaTecidoComponent } from './alterar-roupa-tecido.component';

describe('AlterarRoupaTecidoComponent', () => {
  let component: AlterarRoupaTecidoComponent;
  let fixture: ComponentFixture<AlterarRoupaTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarRoupaTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarRoupaTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
