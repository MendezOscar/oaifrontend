import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { HomeUserComponent } from './features/home-user/home-user.component';
import { HomeAdminComponent } from './features/home-admin/home-admin.component';
import { OfertauserComponent } from './features/ofertauser/ofertauser/ofertauser.component';
import { SolicitarofertaComponent } from './features/ofertauser/solicitaroferta/solicitaroferta.component';
import { EditarofertaComponent } from './features/ofertauser/editaroferta/editaroferta.component';
import { RespuestaofertaComponent } from './features/respuestaoferta/respuestaoferta/respuestaoferta.component';
import { VerdetalleComponent } from './features/ofertauser/verdetalle/verdetalle.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'homeadmin', component: HomeAdminComponent},
  {path: 'homeuser', component: HomeUserComponent},
  {path: 'ofertauser', component: OfertauserComponent},
  {path: 'solicitarofertauser', component: SolicitarofertaComponent},
  {path: 'editarofertauser/:id', component: EditarofertaComponent},
  {path: 'respuesta', component: RespuestaofertaComponent},
  {path: 'verdetalle/:id', component: VerdetalleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
