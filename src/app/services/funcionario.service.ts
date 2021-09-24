import { HttpClient } from '@angular/common/http';
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
}
