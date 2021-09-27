import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { funcao } from '../entities/funcao';

@Injectable({
  providedIn: 'root'
})
export class FuncaoService {

  constructor (private http: HttpClient) { }

    listar(): Observable<any> {
      return this.http.get<funcao[]>("http://localhost:8080/funcao/listar")
   
  }
}
