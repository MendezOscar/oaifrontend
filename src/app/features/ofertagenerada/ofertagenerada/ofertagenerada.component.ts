import { Component, OnInit } from '@angular/core';
import { OfertaGenerada } from 'src/app/models/OfertaGenerada';
import { OfertageneradaService } from 'src/app/services/ofertagenerada/ofertagenerada.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ofertagenerada',
  templateUrl: './ofertagenerada.component.html',
  styleUrls: ['./ofertagenerada.component.css']
})
export class OfertageneradaComponent implements OnInit {
  oferta: OfertaGenerada[];
  periodo: string;
  anio: string;
  max: string;
  min: string;
  res: any;

  constructor(private ofertaGeneradaService: OfertageneradaService,
              private router: Router) { }

  ngOnInit() {
  }

  generar() {
    // tslint:disable-next-line: radix
    this.ofertaGeneradaService.ExecOfertaAcademica(parseInt(this.periodo), parseInt(this.anio),
      // tslint:disable-next-line: radix
      parseInt(this.min), parseInt(this.max)).subscribe (data => {
        this.res = data;
        if (this.res) {
          this.getOfertaGenerada();
        }
      });
  }

  getOfertaGenerada() {
    this.ofertaGeneradaService.getOfertaAcademica().subscribe(data => {
      this.oferta = data;
    });
  }

}
