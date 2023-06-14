import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from 'src/app/Service/servicio.service';
import { Autos } from 'src/app/Dominio/Autos';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent {
  constructor(private router: Router, private service: ServicioService) { }
  auto: Autos = new Autos();

  ngOnInit() {
    this.buscar();
  }

  buscar() {
    let id = localStorage.getItem("id");
    this.auto.id = + Number(id);

    this.service.buscarA(this.auto).subscribe(data => {
      this.auto = data;
    })
  }

  editar() {
    this.service.editarA(this.auto).subscribe(data => {
      this.router.navigate(["listar"]);
    })
  }
}
