import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { HomeAdminComponent } from './features/home-admin/home-admin.component';
import { HomeUserComponent } from './features/home-user/home-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavigationuserComponent } from './features/navigationuser/navigationuser.component';
import { NavigationadminComponent } from './features/navigationadmin/navigationadmin.component';
import { OfertauserComponent } from './features/ofertauser/ofertauser/ofertauser.component';
import { SolicitarofertaComponent } from './features/ofertauser/solicitaroferta/solicitaroferta.component';
import { EditarofertaComponent } from './features/ofertauser/editaroferta/editaroferta.component';
import { RespuestaofertaComponent } from './features/respuestaoferta/respuestaoferta/respuestaoferta.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeUserComponent,
    NavigationuserComponent,
    NavigationadminComponent,
    OfertauserComponent,
    SolicitarofertaComponent,
    EditarofertaComponent,
    RespuestaofertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
