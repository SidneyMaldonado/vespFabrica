import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirFuncaoComponent } from './incluir-funcao.component';

describe('IncluirFuncaoComponent', () => {
  let component: IncluirFuncaoComponent;
  let fixture: ComponentFixture<IncluirFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirFuncaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
