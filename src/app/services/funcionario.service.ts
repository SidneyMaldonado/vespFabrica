import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from '../entities/funcionario';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private http: HttpClient) { }

  rotaBase = "http://localhost:8080/Funcionario";
  
  listar(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.rotaBase}/listar`).pipe(
      tap(heroes => console.log(`fetched funcionarios`)),
      catchError(this.handleError('getFuncionarios'))
    ) as Observable<Funcionario[]>;
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

  

  private handleError<T>(operation = 'operation') {
    return (error: HttpErrorResponse): Observable<T> =>{
        console.error(error);

        const message = (error.error instanceof ErrorEvent) ? error.error.message : 
        `server returned code ${error.status} with body "${error.error}"`;

        throw new Error(`${operation} failed ${message}`)
    };
  }
}
