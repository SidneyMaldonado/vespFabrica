import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarFuncaoComponent } from './alterar-funcao.component';

describe('AlterarFuncaoComponent', () => {
  let component: AlterarFuncaoComponent;
  let fixture: ComponentFixture<AlterarFuncaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarFuncaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarFuncaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
