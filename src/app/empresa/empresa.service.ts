import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  private baseUrl = 'http://localhost:8080/api/v1/empresa';


  constructor(private http: HttpClient) { }

  getEmpresa(id: number) : Observable<any>{
      return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmpresa(empresa: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`,empresa);

  }

  updateEmpresa(id: number, value: any): Observable<Object>{
    if(value.cnpj == ""){
        value = {
          id: value.id,
          nome:value.nome
        }
      
    }
    return this.http.put(`${this.baseUrl}/${id}`,value);
  }

  deleteEmpresa(id:number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`, {responseType:'text'});
  }

  getEmpresaList(): Observable<any>{
    return this.http.get(`${this.baseUrl}`);
  }
 
}
