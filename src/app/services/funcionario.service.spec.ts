import { inject, TestBed } from '@angular/core/testing';
import { FuncionarioService } from './funcionario.service';
import { HttpClient, HttpClientModule, HttpResponse } from '@angular/common/http';
import { Funcionario } from '../entities/funcionario';
//import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';



describe('FuncionarioService (mockup)', () => {
  let service: FuncionarioService;
  let httpClient: HttpClient
  let Funcionarios: Funcionario[];
  let numero: number = 0;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule],
      providers:[FuncionarioService]
    });
    service = TestBed.inject(FuncionarioService);
    httpClient = TestBed.inject(HttpClient)    
  })

 
  describe('#getFuncionarios',()=>{    
   
    it('retornar os funcionarios.', () => {       
        service.listar().subscribe(
          dados =>{numero = dados.length,expect(dados.length).toBeGreaterThan(0)},
          fail
      );
 
    });
    
    it('retornar um funcionario', () => {
      let id: number = 2;           
      service.consultar(id).subscribe(
        dados => {expect(dados.idfuncionario).toEqual(2)},
        fail
      )
    })

});

describe('#updateFuncionario', () => {

  it('Atualizar funcionario', () => {
    const updateFuncionario: Funcionario={idfuncionario:2,nome:'Matheus Tomi',cpf:'65779758093',idSetor:3,email:'matheus@gmail.com',salario:1200,idFuncao:1,datadeContratacao: new Date(2021,1,1)};
    const message = {mensagens:["OK"]}

    service.alterar(updateFuncionario).subscribe(
      data => expect(data).toEqual(message),
      fail
    );
     
  });

})

describe('#incluirFuncionario', () => {

  it('Incluir funcionario', () => {
    const incluirFuncionario: Funcionario={idfuncionario:2,nome:'Matheus Tomi',cpf:'65779758093',idSetor:3,email:'matheus@gmail.com',salario:1200,idFuncao:1,datadeContratacao: new Date(2021,1,1)};
    const message = {mensagens:["OK"]}

    service.incluir(incluirFuncionario).subscribe(
      data => expect(data).toEqual(message),
      fail
    );
     
  });

})

})
