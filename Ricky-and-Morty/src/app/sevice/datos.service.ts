import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'
import { Resultado } from '../interface/resultado';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(
    private _http: HttpClient
  ) { }

  getDatos() {
    const path = 'https://rickandmortyapi.com/api/character'

    return this._http.get<Resultado>(path).pipe();
  }
}
