import { Component, OnInit } from '@angular/core';
import { Datos } from 'src/app/interface/datos';
import { DatosService } from 'src/app/sevice/datos.service';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  public listaPersonajes: Datos[];
  public listaPersonajesCopia: Datos[];

  constructor(
    private _datosService: DatosService
  ) { }

  ngOnInit(): void {
    this._datosService.getDatos().subscribe(
      (resp) => {
        this.listaPersonajes = resp.results;
        this.listaPersonajesCopia = this.listaPersonajes;
      }
    )
  }

  buscar(texto) {
    this.listaPersonajes = this.listaPersonajesCopia;
    if (texto.length === 0) {
      this.listaPersonajes = this.listaPersonajesCopia
    } else {
      let resultadoR = new RegExp(texto, 'i')
      this.listaPersonajes = this.listaPersonajes.filter(x => x.name.match(resultadoR));
    }
  }

}
