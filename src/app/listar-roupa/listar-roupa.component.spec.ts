import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarRoupaComponent } from './listar-roupa.component';

describe('ListarRoupaComponent', () => {
  let component: ListarRoupaComponent;
  let fixture: ComponentFixture<ListarRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarRoupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
