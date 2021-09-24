import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarvendaComponent } from './listarvenda.component';

describe('ListarvendaComponent', () => {
  let component: ListarvendaComponent;
  let fixture: ComponentFixture<ListarvendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarvendaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarvendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
