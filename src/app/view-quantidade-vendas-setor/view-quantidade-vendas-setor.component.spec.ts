import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuantidadeVendasSetorComponent } from './view-quantidade-vendas-setor.component';

describe('ViewQuantidadeVendasSetorComponent', () => {
  let component: ViewQuantidadeVendasSetorComponent;
  let fixture: ComponentFixture<ViewQuantidadeVendasSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuantidadeVendasSetorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuantidadeVendasSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
