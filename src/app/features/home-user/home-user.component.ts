import { Component, OnInit } from '@angular/core';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  consultaMatricula: ConsultaMatricula[];
  cuenta: string;

  constructor(private consultaMatriculaService: ConsultamatriculaService, private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const cuenta = this.route.snapshot.paramMap.get('cuenta');
    this.cuenta = cuenta;
    this.getSolicitudes(cuenta);
  }

  getSolicitudes(cuenta: string) {
    this.consultaMatriculaService.getConsultaMatriculaByAlumno(cuenta).subscribe(data => {
      this.consultaMatricula = data;
    });
  }

  deleteSolicitud(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.consultaMatriculaService.deleteConsultaMatricula(id).subscribe(() => {
        this.getSolicitudes(this.cuenta);
      });
    }
  }

  verDetalle(id: number) {
    console.log(id);
    this.router.navigate(['/verdetalle', id]);
  }

}
