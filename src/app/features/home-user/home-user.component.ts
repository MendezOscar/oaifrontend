import { Component, OnInit } from '@angular/core';
import { ConsultamatriculaService } from 'src/app/services/consultamatricula/consultamatricula.service';
import { ConsultaMatricula } from 'src/app/models/ConsultaMatricula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-user',
  templateUrl: './home-user.component.html',
  styleUrls: ['./home-user.component.css']
})
export class HomeUserComponent implements OnInit {
  consultaMatricula: ConsultaMatricula[];

  constructor(private consultaMatriculaService: ConsultamatriculaService, private router: Router) { }

  ngOnInit() {
    this.getSolicitudes();
  }

  getSolicitudes() {
    this.consultaMatriculaService.getConsultaMatricula().subscribe(data => {
      this.consultaMatricula = data;
    });
  }

  deleteSolicitud(id: number) {
    const res = confirm('Are you sure delete this item?');
    if (res) {
      this.consultaMatriculaService.deleteConsultaMatricula(id).subscribe(() => {
        this.getSolicitudes();
      });
    }
  }

  verDetalle(id: number) {
    console.log(id);
    this.router.navigate(['/verdetalle', id]);
  }

}
