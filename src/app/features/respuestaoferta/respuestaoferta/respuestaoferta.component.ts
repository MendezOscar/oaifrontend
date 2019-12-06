import { Component, OnInit } from '@angular/core';
import { OfertaAcademicaDetalle } from 'src/app/models/OfertaAcademicaDetalle';
import { OfertaacademicadetalleService } from 'src/app/services/ofertaacademicadetalle/ofertaacademicadetalle.service';
import { OfertaacademicaService } from 'src/app/services/ofertaacademica/ofertaacademica.service';
import { OfertaAcademica } from 'src/app/models/OfertaAcademica';
import { OfertageneradaService } from 'src/app/services/ofertagenerada/ofertagenerada.service';
import { Router } from '@angular/router';
import { OfertaGenerada } from 'src/app/models/OfertaGenerada';

@Component({
  selector: 'app-respuestaoferta',
  templateUrl: './respuestaoferta.component.html',
  styleUrls: ['./respuestaoferta.component.css']
})
export class RespuestaofertaComponent implements OnInit {
  oferta: OfertaGenerada[];

  constructor(private ofertaGeneradaService: OfertageneradaService,
              private router: Router) { }


  ngOnInit() {
    this.getOfertaGenerada();
  }

  getOfertaGenerada() {
    this.ofertaGeneradaService.getOfertaAcademica().subscribe(data => {
      this.oferta = data;
    });
  }
}
