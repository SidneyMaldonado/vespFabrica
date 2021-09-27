import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncluirRoupaComponent } from './incluir-roupa.component';

describe('IncluirRoupaComponent', () => {
  let component: IncluirRoupaComponent;
  let fixture: ComponentFixture<IncluirRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncluirRoupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
