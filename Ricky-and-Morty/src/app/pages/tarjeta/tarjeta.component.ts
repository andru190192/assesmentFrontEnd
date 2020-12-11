import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  @Input() name
  @Input() status
  @Input() nameOrigen
  @Input() gender
  @Input() type
  @Input() image
  @Input() episode


  constructor() { }

  ngOnInit(): void {
  }

}
