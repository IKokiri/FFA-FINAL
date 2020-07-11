import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  constructor(private http: HttpClient) {}

  getDistritos() {
    return this.http.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/MG/distritos");
  }
}
