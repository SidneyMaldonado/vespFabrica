import { Roupa } from './../entities/roupa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoupaService {

    constructor( private http: HttpClient ) { }
    listar(): Observable<any> {
      return this.http.get<Roupa[]>("http://localhost:8080/roupa/listar");
    }

}
