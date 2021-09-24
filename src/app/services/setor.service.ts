import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Setor } from '../entities/setor';

@Injectable({
  providedIn: 'root'
})
export class SetorService {

  constructor( private http: HttpClient ) {}
    listar(): Observable<any> {
      return this.http.get<Setor[]>("http://localhost:8080/setor/listar");
    }

  }

