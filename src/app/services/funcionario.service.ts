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

  rotaBase = "http://localhost:8080/Funcionario";
  
  listar(): Observable<any> {
    return this.http.get<Funcionario[]>(`${this.rotaBase}/listar`);
  }

  incluir(funcionario: Funcionario):Observable<any>{
    return this.http.post<Funcionario>(`${this.rotaBase}/incluir`, funcionario);
  }

  alterar(funcionario: Funcionario): Observable<Funcionario>{
    return this.http.post<Funcionario>(`${this.rotaBase}/alterar`, funcionario)
  }

  consultar(id: number): Observable<Funcionario>{
    return this.http.get<Funcionario>(`${this.rotaBase}/${id}`)
  }
}
