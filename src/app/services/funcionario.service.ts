import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../entities/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }
  
  listar(): Observable<any> {
    return this.http.get<Funcionario[]>("http://localhost:8080/Funcionario/listar");
  }

  incluir(funcionario: Funcionario):Observable<any>{
    return this.http.post<Funcionario>("http://localhost:8080/Funcionario/incluir", funcionario);
  }
}
