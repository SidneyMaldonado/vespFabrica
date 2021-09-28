import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarRoupaComponent } from './alterar-roupa.component';

describe('AlterarRoupaComponent', () => {
  let component: AlterarRoupaComponent;
  let fixture: ComponentFixture<AlterarRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlterarRoupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlterarRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
