import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FuncionarioService } from './funcionario.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Funcionario } from '../entities/funcionario';

describe('FuncionarioService', () => {
  let service: FuncionarioService;
  let httpTestingController: HttpTestingController;
  let httpClient: HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[FuncionarioService]
    });
    service = TestBed.inject(FuncionarioService);
    httpTestingController = TestBed.inject(HttpTestingController)
    httpClient = TestBed.inject(HttpClient)
  });
  
  afterEach(() =>{
    httpTestingController.verify()
  })

  describe('#getFuncionarios',()=>{
    let result: Funcionario[] =[]
    it('#getFuncionarios', () => {
      service.listar().subscribe(
        dados => dados ,fail
      )

      const req = httpTestingController.expectOne(`http://localhost:8080/Funcionario/listar`);
      expect(req.request.method).toEqual('GET')
      result = req.request.body;

      expect(result).toBeGreaterThan(0);

      const expectedResponse = new HttpResponse(
        { status: 200, statusText: 'OK'});
      req.event(expectedResponse);

      req.flush([])
      
    });
    describe('#updateFuncionario', () => {
      const makeUrl = `http://localhost:8080/Funcionario/alterar`;
  
      it('Atualizar funcionario e retornar mensagem Ok', () => {
  
        const updateFuncionario: Funcionario={idfuncionario:1,nome:'Matheus Tomi',cpf:'65779758093',idSetor:3,email:'matheus@gmail.com',salario:1200,idFuncao:1,datadeContratacao: new Date(2021,1,1)};
        const message = {message:"OK"}

        service.alterar(updateFuncionario).subscribe(
          data => expect(data).toEqual(updateFuncionario),
          fail
        );
         
        const req = httpTestingController.expectOne(`http://localhost:8080/Funcionario/alterar`);
        expect(req.request.method).toEqual('POST');
        expect(req.request.body).toEqual(updateFuncionario);
  
        // Expect server to return the hero after PUT
        const expectedResponse = new HttpResponse(
          { status: 200, statusText: 'OK', body: updateFuncionario });
        req.event(expectedResponse);
      });
    
  })
});
})
