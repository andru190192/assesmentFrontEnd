import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

import { HttpClientModule } from '@angular/common/http';
import { TarjetaComponent } from './pages/tarjeta/tarjeta.component'

@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    TarjetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
