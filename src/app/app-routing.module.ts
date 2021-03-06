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
import { SolicitudesComponent } from './features/ofertaadmin/solicitudes/solicitudes.component';
import { OfertaGenerada } from './models/OfertaGenerada';
import { OfertageneradaComponent } from './features/ofertagenerada/ofertagenerada/ofertagenerada.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'homeadmin', component: HomeAdminComponent},
  {path: 'homeuser/:cuenta', component: HomeUserComponent},
  {path: 'ofertauser', component: OfertauserComponent},
  {path: 'solicitarofertauser', component: SolicitarofertaComponent},
  {path: 'editarofertauser/:id', component: EditarofertaComponent},
  {path: 'respuesta', component: RespuestaofertaComponent},
  {path: 'verdetalle/:id', component: VerdetalleComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'ofertagenerada', component: OfertageneradaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
