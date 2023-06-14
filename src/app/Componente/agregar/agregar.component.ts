import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';
import { Autos } from 'src/app/Dominio/Autos';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent {
  constructor(private router: Router, private service: ServicioService) {}

  auto: Autos = new Autos();

  guardar() {
    this.service.guardarA(this.auto).subscribe(data => {
      this.router.navigate(["listar"]);
    })
  }
            
}
