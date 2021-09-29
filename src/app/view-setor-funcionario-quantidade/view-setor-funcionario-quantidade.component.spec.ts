import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSetorFuncionarioQuantidadeComponent } from './view-setor-funcionario-quantidade.component';

describe('ViewSetorFuncionarioQuantidadeComponent', () => {
  let component: ViewSetorFuncionarioQuantidadeComponent;
  let fixture: ComponentFixture<ViewSetorFuncionarioQuantidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSetorFuncionarioQuantidadeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSetorFuncionarioQuantidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
