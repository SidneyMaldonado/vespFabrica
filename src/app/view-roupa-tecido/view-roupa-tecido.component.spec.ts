import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRoupaTecidoComponent } from './view-roupa-tecido.component';

describe('ViewRoupaTecidoComponent', () => {
  let component: ViewRoupaTecidoComponent;
  let fixture: ComponentFixture<ViewRoupaTecidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRoupaTecidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRoupaTecidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
