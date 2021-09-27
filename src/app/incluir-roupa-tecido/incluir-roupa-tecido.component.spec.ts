import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirRoupaTecidoComponent } from './incluir-roupa-tecido.component';

describe('IncluirRoupaTecidoComponent', () => {
  let component: IncluirRoupaTecidoComponent;
  let fixture: ComponentFixture<IncluirRoupaTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirRoupaTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirRoupaTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
