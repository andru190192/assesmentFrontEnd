import { Component, OnInit } from '@angular/core';
import { serviceApi } from '../app/service/serviceApi'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [serviceApi],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public character: any
  title = 'pruebaedison';
  constructor(
    public ServiceApi: serviceApi
  ) { }

  ngOnInit() {
    this.getcharacter()
  }
  getcharacter() {
    this.ServiceApi.getCharacter().subscribe(res => console.log(this.character=res))
  }
}