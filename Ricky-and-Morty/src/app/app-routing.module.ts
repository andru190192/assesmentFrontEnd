import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/pagina-principal/pagina-principal.component';

const routes: Routes = [
  {path: 'home', component: PaginaPrincipalComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PaginaPrincipalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
