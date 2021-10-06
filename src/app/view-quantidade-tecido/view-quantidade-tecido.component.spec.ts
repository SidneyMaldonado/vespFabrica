import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuantidadeTecidoComponent } from './view-quantidade-tecido.component';

describe('ViewQuantidadeTecidoComponent', () => {
  let component: ViewQuantidadeTecidoComponent;
  let fixture: ComponentFixture<ViewQuantidadeTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuantidadeTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewQuantidadeTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
