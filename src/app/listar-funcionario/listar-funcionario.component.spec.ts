import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Funcionario } from '../entities/funcionario';
import { FuncionarioService } from '../services/funcionario.service';
import { ListarFuncionarioComponent } from './listar-funcionario.component';

describe('ListarFuncionarioComponent', () => {
  let component: ListarFuncionarioComponent;
  let fixture: ComponentFixture<ListarFuncionarioComponent>;
  let h1: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarFuncionarioComponent ],
      imports:[HttpClientModule],
      providers:[FuncionarioService]
    })
    .compileComponents();
    const fixture = TestBed.createComponent(ListarFuncionarioComponent);
    component = fixture.componentInstance

  });

  it('#Init - O componete deve ser criado', () => {
    expect(component).toBeTruthy();
  });

  it('#Dados - Deveria conter dados em funcionarios', (done)=> {
    let funcionarios: Funcionario[] = component.listaMock();
    let expected: number = funcionarios.length
    let result: number = 0;
    console.log("quantidade de funcionarios:", expected);
    expect(expected).toBeGreaterThan(result);
    done();
  });

  it('#Title - Deveria ter o titulo original em h1', async(() =>{
    const fixture = TestBed.createComponent(ListarFuncionarioComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toContain("Lista de Funcionarios");

  }));
});
