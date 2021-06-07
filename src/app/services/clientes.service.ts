import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clientes } from '../Models/Clientes';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  apiURL: String = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  create(formData: any){
    return this.http.post<Clientes>(`${this.apiURL}/clientes/create`, formData)

  }

}
