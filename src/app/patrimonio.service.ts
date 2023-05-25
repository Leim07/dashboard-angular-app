import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patrimonio } from './patrimonio/patrimonio';

@Injectable({
  providedIn: 'root'
})
export class PatrimonioService {  

  constructor(private http: HttpClient){

  }

  salvar(patrimonio: Patrimonio ) : Observable<Patrimonio>{
    return this.http.post<Patrimonio>('http://localhost:8080/api/patrimonio', patrimonio);
  }

  atualizar(patrimonio: Patrimonio) : Observable<any>{
    return this.http.put<Patrimonio>(`http://localhost:8080/api/patrimonio/${patrimonio.id}`, patrimonio)
  }

  getPatrimonio() : Observable<Patrimonio[]>{
    return this.http.get<Patrimonio[]>('http://localhost:8080/api/patrimonio');
  } 
  
  getPatrimonioById(id: number) : Observable<Patrimonio>{
    return this.http.get<any>(`http://localhost:8080/api/patrimonio/${id}`);
  }

  deletar(patrimonio: Patrimonio) :Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/api/patrimonio/${patrimonio.id}`);
  }

}