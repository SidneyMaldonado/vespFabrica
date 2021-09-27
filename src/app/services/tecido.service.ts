import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Roupa } from '../entities/roupa';
import { Tecido } from '../entities/tecido';

@Injectable({
  providedIn: 'root'
})
export class TecidoService {

  constructor(private http: HttpClient) { }
  listar(): Observable<any>{
    return this.http.get<Roupa[]>("http://localhost:8080/tecido/listar")
  }

<<<<<<< HEAD
  incluir(tecido: Tecido): Observable<Tecido> {
    return this.http.post<Tecido>("http://localhost:8080/tecido/incluir", tecido);


  }
=======
  incluir(tecido: Tecido): Observable<Tecido>{
      return this.http.post<Tecido>("http://localhost:8080/tecido/incluir", tecido);
  }
  
>>>>>>> a944bf408f4c92dedd341ef18eb74c63ac004d82
}
