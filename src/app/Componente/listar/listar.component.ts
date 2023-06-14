import { Component } from '@angular/core';
import { Autos } from 'src/app/Dominio/Autos';
import { ServicioService } from 'src/app/Service/servicio.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {
  auto: Autos[];

  constructor(private router: Router, private service: ServicioService) { }

  ngOnInit(): void {
    this.service.listarA().subscribe(data => {
      this.auto = data;
      console.log(JSON.stringify(data));
    })
  }

  Editar(auto: Autos) {
    localStorage.setItem("id", auto.id.toString());
    this.router.navigate(["editar"]);
  }

  Eliminar(auto: Autos) {
    this.service.eliminarA(auto).subscribe(data => {
      this.service.listarA().subscribe(data => {
        this.auto = data;
      })
    })

  }

}
