import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirSetorComponent } from './incluir-setor.component';

describe('IncluirSetorComponent', () => {
  let component: IncluirSetorComponent;
  let fixture: ComponentFixture<IncluirSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirSetorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
